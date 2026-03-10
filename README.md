# 🚀 GenWebAI — AI Website Generator

GenWebAI is an AI-powered SaaS platform that generates modern websites from simple text prompts.

Users can describe their idea, and the AI instantly generates a **responsive, production-ready website**.  
The platform includes **AI generation, credits system, payments integration, authentication, and a dashboard to manage generated websites**.

---

## ✨ Features

### 🤖 AI Website Generation
Describe your idea and AI will generate a complete website instantly.

### 💰 Credit-Based System
Users spend credits to generate websites.

### 💳 Secure Payments
Credits can be purchased using Stripe Checkout.

### 🎞 Smooth Animations
Modern UI powered by Framer Motion animations.

### 🔐 Authentication
Secure login system with protected routes.

### 📊 Dashboard
Users can view and manage all generated websites.

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Framer Motion
- Redux Toolkit

### Backend
- Node.js
- Express.js
- MongoDB

### Payments
- Stripe Checkout
- Stripe Webhooks

---

## 🏗 System Architecture

```
            ┌─────────────────────────┐
            │        Frontend         │
            │  React + Tailwind CSS  │
            │  Framer Motion + Redux │
            └───────────┬────────────┘
                        │
                        │ API Requests
                        ▼
            ┌─────────────────────────┐
            │         Backend         │
            │      Node + Express     │
            ├─────────────────────────┤
            │ Authentication System   │
            │ AI Website Generation   │
            │ Credit Management       │
            │ Stripe Payment Handling │
            └───────────┬────────────┘
                        │
                        ▼
            ┌─────────────────────────┐
            │        Database         │
            │        MongoDB          │
            │ Users + Websites Data   │
            └─────────────────────────┘
```

---


## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/priyanshisoni14/GenWebAI.git
cd GenWebAI
```

---

## Install Dependencies

### Client

```bash
cd client
npm install
```

### Server

```bash
cd server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **server folder**.

Example configuration:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret

STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

---

## ▶️ Run the Project

Start backend

```bash
cd server
npm run dev
```

Start frontend

```bash
cd client
npm run dev
```

---

## 📈 Future Improvements

- Custom domain support
- More AI templates
- Drag-and-drop website editor
- Team collaboration
- Analytics dashboard

---

## 👩‍💻 Author

**Priyanshi Soni**

GitHub  
https://github.com/priyanshisoni14

---

⭐ Happy Deploying
