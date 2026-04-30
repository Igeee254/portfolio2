# Alpha Sites | Modern Web Portfolio

A premium, full-stack portfolio built for **Alpha Sites**, featuring a modern tech aesthetic, secure authentication, and a dynamic project showcase.

## 🚀 Live Demo
**Production URL**: [https://portfolio2-eight-eta-88.vercel.app](https://portfolio2-eight-eta-88.vercel.app)

## ✨ Key Features
- 🎨 **Premium UI/UX**: Dark-themed glassmorphism design with a custom branded favicon.
- 🔐 **Secure Authentication**: Custom Login and Signup system with session-based access (2-hour tokens).
- 👤 **Guest Mode**: Allows visitors to browse the portfolio immediately with random avatars.
- 📱 **Floating WhatsApp Integration**: Persistent floating contact button for instant communication.
- 📬 **Interactive Contact Form**: Includes a "Request Callback" feature with real-time email notifications via Flask-Mail.
- 📂 **Dynamic Project Grid**: Projects are fetched from a Supabase PostgreSQL database via a Flask API.
- 🌙 **Theme Toggle**: Persistent light/dark mode support.

## 🛠️ Technical Stack
- **Frontend**: React (Vite), Vanilla CSS (Custom tokens).
- **Backend**: Python (Flask), Flask-CORS, Flask-Mail, PyJWT, Bcrypt.
- **Database**: Supabase (PostgreSQL).
- **Deployment**: Vercel (Production Build).

## 📂 Project Structure
- `/src`: React frontend components and logic.
- `/public`: Static assets including `logo_alpha.png`.
- `/backend`: Flask API server and database seeding scripts.

## 🛠️ Local Development
1. **Backend**: `cd backend && python app.py`
2. **Frontend**: `npm install && npm run dev`

---
© 2026 Alpha Sites. Dedicated to high-end digital experiences.
