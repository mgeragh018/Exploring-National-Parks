import React, { useState } from 'react';
import '../../Style/parkSearch.css';

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

    return (
        <div className='park-search-welcome'>
            <center>
                <h1 id="search-title">Search for a Park</h1>

                <div className="search-about">
                    <p>
                        Welcome to the Parks Finder Application! Select an activity below to begin finding the perfect park for you:
                    </p>

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
                </div>
            </center>
        </div>
    );
};

export default ParkAI;
