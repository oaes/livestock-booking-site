import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  throw new Error("MONGO_URI is not defined");
}

const client = new MongoClient(mongoUri);
const db = client.db("qurbaniHat");

const baseURL =
  process.env.AUTH_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const auth = betterAuth({
  baseURL,

  secret: process.env.AUTH_SECRET || "dev-secret",

  database: mongodbAdapter(db, {
    client,
  }),

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