# 🚀 After5 Digital — AI Sales Agents for 24/7 Lead Conversion

**Automate your sales funnel with bespoke AI agents that never sleep.**

After5 Digital builds sophisticated, high-performance AI sales agents designed to catch, qualify, and follow up with leads across **WhatsApp, Email, and SMS** — ensuring your business responds to every inquiry within seconds.

---

## ✨ Features

- **⚡ 24/7 Lead Response:** Instant engagement with potential clients, even after hours.
- **📱 Multi-Channel Support:** Seamless integration with WhatsApp, SMS, and Email.
- **🎯 Intelligent Qualification:** Automated screening to identify high-value leads.
- **💎 Premium UI/UX:** A stunning, modern web interface built with React and Framer Motion.
- **🚀 Serverless Architecture:** Scalable and robust API handlers via Vercel Functions.
- **📊 Lead Management:** Real-time data storage and synchronization with Supabase.

---

## 🛠️ Tech Stack

### Frontend
- **React 19 + TypeScript**: Modern, type-safe functional components.
- **Vite**: Ultra-fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS for a sleek, responsive design.
- **Framer Motion**: High-end animations and transitions.
- **Lucide React**: Beautifully crafted open-source icons.

### Backend & Infrastructure
- **Vercel Functions**: Serverless API routes for handling form submissions.
- **Supabase**: Open-source Firebase alternative for lead storage and management.
- **Resend**: Transactional email service for instant notifications.
- **Lenis**: Smooth scrolling for a refined user experience.

---

## 🛡️ Security & Environment

This project is built with **security-first** principles. No sensitive API keys or credentials are hardcoded in the source code.

- **Environment Variables:** All secrets (Supabase URLs, API Keys) are managed through standard `.env` files.
- **Vercel Integration:** Production secrets are securely injected via Vercel's environment variable management.
- **Git Protection:** The `.gitignore` is configured to prevent accidental leaks of local environment files.

---

## 🏗️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (Latest LTS)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/niihhhall/after-v.git
   cd after-v
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your credentials:
   ```env
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   RESEND_API_KEY=your_resend_api_key
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

---

## 🚀 Deployment

The project is optimized for deployment on **Vercel**.

1. Connect your GitHub repository to Vercel.
2. Add the environment variables listed in `.env.local` to the Vercel Dashboard.
3. Deploy!

---

## 📄 License

Internal Project — After5 Digital © 2026
