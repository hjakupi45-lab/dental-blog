import os
import json
import re
import time
from datetime import datetime
import requests

# Configuration
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
POSTS_DIR = os.path.join(os.path.dirname(__file__), "..", "content", "posts")
TOPICS_FILE = os.path.join(os.path.dirname(__file__), "topics.json")

# Royalty-free dental cover images from Unsplash (rotated daily)
FALLBACK_IMAGES = [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
]

MODELS_TO_TRY = ["gemini-3.5-flash", "gemini-3.1-flash-lite", "gemini-3-flash-preview"]

def get_next_topic():
    if not os.path.exists(TOPICS_FILE):
        return "The Future of Digital Dental CAD/CAM Workflows in 2026"
    
    with open(TOPICS_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    topics = data.get("topics", [])
    used_topics = data.get("used", [])
    
    # Find first unused topic
    for topic in topics:
        if topic not in used_topics:
            used_topics.append(topic)
            with open(TOPICS_FILE, "w", encoding="utf-8") as f:
                json.dump({"topics": topics, "used": used_topics}, f, indent=2)
            return topic
            
    # If all used, loop back
    return "Advances in 3D Dental Planning and Aligner Fabrication"

def generate_article_with_gemini(topic: str) -> dict:
    prompt = f"""You are a senior digital dentistry consultant, dental technician, and CAD/CAM expert.
Write an authoritative, engaging, and SEO-optimized blog article about the topic: "{topic}".

Guidelines:
- Naturally highlight practical workflows and clinical benefits of relevant software suites, such as Exocad (DentalCAD, ChairsideCAD, exoplan), 3Shape (Dental System, Ortho Analyzer, Implant Studio), MillBox, HyperDent, Sum3D, RealGUIDE, CoDiagnostiX, InLab, Romexis, NemoCast, Maestro 3D, OnyxCeph, ArchForm, BlueSkyPlan, or CMF 7.
- Structure with clear H2 and H3 subheadings, key clinical takeaways, troubleshooting advice, and a short FAQ section.
- Write 800 - 1200 words.
- Conclude with a helpful Call To Action encouraging clinics and dental labs to reach out on Telegram (@CADCAMSOFTWARES) for software setups, permanent activation, and dedicated 24/7 technical support.

Output MUST be valid JSON with this exact schema (no markdown formatting around JSON):
{{
  "title": "SEO Catchy Title",
  "slug": "url-friendly-slug-with-hyphens",
  "description": "Engaging 1-2 sentence meta description for Google search (under 160 characters).",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "content": "Full Markdown article text here (use ## for headers, bullet points, etc.)"
}}
"""
    
    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"responseMimeType": "application/json"}
    }
    
    last_err = None
    for model in MODELS_TO_TRY:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={GEMINI_API_KEY}"
        for attempt in range(3):
            try:
                print(f"Requesting content using {model} (attempt {attempt + 1})...")
                response = requests.post(url, json=payload, timeout=60)
                if response.status_code == 200:
                    result = response.json()
                    raw_text = result["candidates"][0]["content"]["parts"][0]["text"]
                    return json.loads(raw_text)
                print(f"{model} returned HTTP {response.status_code}, retrying...")
                time.sleep(2)
            except Exception as e:
                last_err = e
                time.sleep(2)
                
    raise RuntimeError(f"All models failed to generate content: {last_err}")

def main():
    if not GEMINI_API_KEY:
        raise ValueError("Missing GEMINI_API_KEY environment variable!")
        
    os.makedirs(POSTS_DIR, exist_ok=True)
    
    topic = get_next_topic()
    print(f"Generating post for topic: {topic}")
    
    post_data = generate_article_with_gemini(topic)
    
    today = datetime.now().strftime("%Y-%m-%d")
    clean_slug = re.sub(r'[^a-z0-9\-]', '', post_data.get("slug", "post").lower().replace(' ', '-'))
    filename = f"{today}-{clean_slug}.md"
    file_path = os.path.join(POSTS_DIR, filename)
    
    # Pick a cover image based on date hash
    image_idx = sum(ord(c) for c in today) % len(FALLBACK_IMAGES)
    cover_image = FALLBACK_IMAGES[image_idx]
    
    clean_title = post_data.get('title', 'Dental CAD/CAM Insight').replace('"', "'")
    clean_desc = post_data.get('description', '').replace('"', "'")
    tags_json = json.dumps(post_data.get('tags', ['Dentistry', 'CAD/CAM']))
    
    # Create Markdown with Frontmatter
    frontmatter = f"""---
title: "{clean_title}"
date: "{today}"
slug: "{clean_slug}"
description: "{clean_desc}"
coverImage: "{cover_image}"
tags: {tags_json}
---

{post_data['content']}
"""
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(frontmatter)
        
    print(f"Successfully generated post: {file_path}")

if __name__ == "__main__":
    main()
