import axios from "axios";

const BASE_URL = "https://skiek-backend.onrender.com/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDRiMjkyODc1ODZlYzM5YWFkMzFmMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNTc3ODM3NSwiZXhwIjoxNzI0NDE4Mzc1fQ.KUCcyJQCYCLpPvpb9SpB5Vl0d20sPgjmZ3n4e7WCpDE";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
