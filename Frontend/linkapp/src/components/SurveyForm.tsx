import React, { useState } from 'react';
import axios from 'axios';

const SurveyForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState(['']);

  const handleAddQuestion = () => {
    setQuestions([...questions, '']);
  };

  const handleSubmit = async () => {
    await axios.post('http://localhost:3001/api/surveys', {
      title,
      questions,
    });
  };

  return (
    <div>
      <h2>Create Survey</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Survey Title"
      />
      {questions.map((question, idx) => (
        <input
          key={idx}
          type="text"
          value={question}
          onChange={(e) => {
            const newQuestions = [...questions];
            newQuestions[idx] = e.target.value;
            setQuestions(newQuestions);
          }}
          placeholder={`Question ${idx + 1}`}
        />
      ))}
      <button onClick={handleAddQuestion}>Add Question</button>
      <button onClick={handleSubmit}>Create Survey</button>
    </div>
  );
};

export default SurveyForm;
