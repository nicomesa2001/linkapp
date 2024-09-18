import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SurveyList: React.FC = () => {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    const fetchSurveys = async () => {
      const result = await axios.get('http://localhost:3001/api/surveys');
      setSurveys(result.data);
    };

    fetchSurveys();
  }, []);

  return (
    <div>
      <h2>Surveys</h2>
      <ul>
        {surveys.map((survey: any) => (
          <li key={survey.id}>{survey.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SurveyList;
