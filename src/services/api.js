// src/services/api.js
const API_URL = 'http://localhost:3001/api';

export const testApi = async () => {
    try {
        const response = await fetch(`${API_URL}/test`);
        const data = await response.text();
        return data;
    } catch (error) {
        console.error('Error fetching data from API:', error);
        throw error;
    }
};
