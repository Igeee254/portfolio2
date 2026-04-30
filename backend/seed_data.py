import os
import requests
from dotenv import load_dotenv

load_dotenv()

SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY")

HEADERS = {
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}",
    "Content-Type": "application/json",
    "Prefer": "return=minimal"
}

project_data = [
    {
        "title": "Greenville App",
        "description": "A comprehensive solution for eco-friendly resource management and green initiatives.",
        "image_url": "/greenville_g.svg",
        "link_url": "https://github.com/Igeee254/greenview-er"
    },
    {
        "title": "Alpha Boutique",
        "description": "Premium e-commerce platform with a focus on high-end fashion and luxury experience.",
        "image_url": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
        "link_url": "https://alpha-boutique-app.vercel.app/"
    },
    {
        "title": "Alpha Boutique Admin",
        "description": "Advanced inventory and order management system for the Alpha Boutique ecosystem.",
        "image_url": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        "link_url": "#" 
    }
]

def seed_data():
    url = f"{SUPABASE_URL}/rest/v1/projects"
    print(f"Seeding data to {url}...")
    try:
        response = requests.post(url, headers=HEADERS, json=project_data)
        response.raise_for_status()
        print("Successfully seeded project data!")
    except Exception as e:
        print(f"Error seeding data: {e}")
        if hasattr(e, 'response') and e.response is not None:
            print(f"Response: {e.response.text}")

if __name__ == "__main__":
    seed_data()
