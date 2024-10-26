// FetchChatGPT.js
import axios from 'axios';

/**
 * Sends a request to the ChatGPT API to get a response based on the selected question.
 * 
 * @function fetchChatGPTResponse
 * @param {string} question - The question selected by the user
 * @returns {string} - The AI-generated response
 * @throws {Error} - If the API request fails
 */
export const fetchChatGPTResponse = async (question) => {
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY; // Use environment variable for API key

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'You are an expert on national parks.' },
                    { role: 'user', content: question }
                ],
                max_tokens: 100,
                temperature: 0.7,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
            }
        );

        // Extract the content of the AI's response
        const aiResponse = response.data.choices[0].message.content;
        return aiResponse;
    } catch (error) {
        console.error('Error fetching response from ChatGPT:', error.message);
        throw new Error('Failed to fetch response from ChatGPT.');
    }
};

export default fetchChatGPTResponse;
