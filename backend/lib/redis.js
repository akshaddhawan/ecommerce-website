import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL);

// Code optimization: 2025-10-17T13:27:50.638Z