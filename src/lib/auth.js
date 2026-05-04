import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const mongoUri = process.env.MONGO_URI;

const isBuild = process.env.NODE_ENV === "production" && !process.env.VERCEL && !process.env.NETLIFY;

let client;
let db;

if (mongoUri) {
  client = new MongoClient(mongoUri);
  db = client.db("qurbanibazer");
} else {
  console.warn("⚠️ MONGO_URI is missing (build phase)");
}

const baseURL =
  process.env.AUTH_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.URL 
    ? process.env.URL
    : "http://localhost:3000");

export const auth = betterAuth({
  baseURL,

  secret: process.env.AUTH_SECRET || "dev-secret",


  database: db
    ? mongodbAdapter(db, { client })
    : undefined,

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },
});