import axios from "axios";
import * as SecureStore from "expo-secure-store";

export const TOKEN_KEY = "auth_token";
export const USER_KEY = "auth_username";

export const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    timeout: 10000,
    headers: { "Content-Type": "application/json" }
});

api.interceptors.request.use(async (config) => {
    const token = await SecureStore.getItemAsync(TOKEN_KEY);

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});
