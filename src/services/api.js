// src/services/api.js
const API= process.env.REACT_APP_API_BACK;

export const testApi = async () => {
    try {
        const response = await fetch(`${API}/test`);
        const data = await response.text();
        return data;
    } catch (error) {
        console.error('Error fetching data from API:', error);
        throw error;
    }
};
