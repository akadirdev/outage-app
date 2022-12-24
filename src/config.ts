import dotenv from "dotenv";

dotenv.config();

export const SITE_ID = process.env.SITE_ID ?? "norwich-pear-tree";
export const BASE_URL =
  process.env.BASE_URL ??
  "https://api.krakenflex.systems/interview-tests-mock-api/v1/";
export const API_KEY = process.env.API_KEY ?? "empty-api-key";
