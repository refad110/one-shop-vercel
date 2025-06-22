# One Shop (Firebase + Vercel ready)

Lightweight e‑commerce landing page with category buttons, featured products and Google authentication.

## Local preview

```bash
python -m http.server 8080
# then open http://localhost:8080
```

## Deploy to Vercel

1. Push these files to a GitHub repo.
2. Import the repo in Vercel → **Framework preset → Other**, Build command _empty_, Output folder `.`.
3. Done!

## Connect Firebase

1. Create a **Web app** in Firebase console → copy config.
2. Replace placeholders in `firebase-config.js`.
3. (Optional) enable Google Sign‑in in **Auth → Sign‑in providers**.

Enjoy 🚀
