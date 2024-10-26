import React, { useState } from 'react';
import '../../Style/parkAI.css';
import { fetchChatGPTResponse } from '../Functionality/FetchChatGPT'; // Importing the new API call

/**
 * Component for welcoming and explaining the park search
 * functionality to a user.
 * 
 * @component
 * @module ParkSearchWelcome
 * @memberof ParkSearch
 * @returns {JSX.Element} Park search welcome header
 */
const ParkAI = () => {
    const [selectedQuestion, setSelectedQuestion] = useState('');
    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const questions = [
        'What is the largest national park in the USA?',
        'Which national park is known for Old Faithful geyser?',
        'Where can you find the Grand Canyon?',
        'What national park is home to the tallest mountain in North America?',
        'Which national park is famous for its massive sequoia trees?',
        'Where is Zion National Park located?',
        'What national park is known for its diverse wildlife in Alaska?',
        'Which national park has the highest recorded temperature on Earth?',
        'What is the oldest national park in the USA?',
        'Which national park is located in the Everglades of Florida?'
    ];

    const handleChange = (event) => {
        setSelectedQuestion(event.target.value);
    };

    const handleAskAI = async () => {
        if (!selectedQuestion) {
            setResult('Please select a question before asking AI.');
            return;
        }
        
        setIsLoading(true);
        try {
            const response = await fetchChatGPTResponse(selectedQuestion);
            setResult(response);
        } catch (error) {
            setResult('Failed to get a response from AI. Please try again.');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='park-ai'>
            <center>
                <h1 id="ai-title">National Park Trivia</h1>

                <div className="ai-about">
                    <p>Select a trivia question below and then Ask AI:</p>

                    {/* Dropdown for selecting questions */}
                    <select 
                        value={selectedQuestion} 
                        onChange={handleChange} 
                        className="question-dropdown"
                    >
                        <option value="">-- Choose a question --</option>
                        {questions.map((question, index) => (
                            <option key={index} value={question}>
                                {question}
                            </option>
                        ))}
                    </select>

                    {selectedQuestion && (
                        <p className="selected-question">
                            <strong>Selected Question:</strong> {selectedQuestion}
                        </p>
                    )}

                    {/* "Ask AI" button */}
                    <button 
                        className="ask-ai-button" 
                        onClick={handleAskAI}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Asking AI...' : 'Ask AI'}
                    </button>

                    {/* Container for displaying AI response */}
                    {result && (
                        <div className="ai-result-container">
                            <p>{result}</p>
                        </div>
                    )}
                </div>
            </center>
        </div>
    );
};

export default ParkAI;
