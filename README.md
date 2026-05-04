# 🐄 Livestock Booking Platform

A modern **livestock marketplace web application** built with Next.js, where users can browse, view, and book animals for Qurbani or farming purposes.

---

## 🚀 Features

* 🐂 Browse animals (Cow, Goat, etc.)
* 🔍 Detailed animal view page
* 💰 Price & weight display
* 🖼️ Optimized image handling (Next.js Image)
* 🔐 Authentication system (Better Auth)
* 🌐 Fully responsive UI (TailwindCSS + DaisyUI)
* ⚡ Fast performance with Next.js App Router

---

## 🛠️ Tech Stack

* **Frontend:** Next.js 16 (App Router)
* **Styling:** Tailwind CSS + DaisyUI
* **Authentication:** Better Auth
* **Database:** MongoDB
* **Deployment:** Vercel

---

## 📁 Project Structure

```
src/
 ├── app/
 │   ├── page.js
 │   ├── all-animals/
 │   └── profile/
 │
 ├── components/
 │   └── homepage/
 │       ├── AnimalCard.jsx
 │       ├── Featured.jsx
 │
 ├── lib/
 │   ├── auth.js
 │   └── fetchData.js
 │
 ├── data/
 │   └── animalsData.json
 │
public/
 ├── cows/
 ├── goats/
 └── placeholder.jpg
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/oaes/livestock-booking-site.git
cd livestock-booking-site
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Setup environment variables

Create a `.env.local` file:

```env
MONGO_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

### 4️⃣ Run development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🖼️ Image Rules (IMPORTANT)

All images must be inside `/public` folder.

### ✅ Correct:

```
/public/cows/01.jfif
→ use "/cows/01.jfif"
```

### ❌ Wrong:

```
./cows/01.jfif
/public/cows/01.jfif
```

---

## 📦 Data Handling

Animals data is currently stored in:

```
/src/data/animalsData.json
```

For production, you can switch to:

* MongoDB
* API routes (`/api/animals`)

---

## 🔐 Authentication

Using **Better Auth** with MongoDB.

API route:

```
/api/auth/[...all]
```

---

## 🚀 Deployment

Deployed easily on Vercel:

1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variables
4. Deploy

---

## ⚠️ Known Issues

* Image paths must be correct (`/public` only)
* Missing env variables may break auth
* Build may fail if fetching local URLs during build

---

## 📌 Future Improvements

* 🧑‍💼 Admin dashboard (Add/Edit/Delete animals)
* ❤️ Wishlist / Favorites
* 💳 Payment integration
* 📱 Mobile app version
* 🔎 Advanced filtering & search

---
