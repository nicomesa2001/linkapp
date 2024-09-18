import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';

const SurveyResponses: React.FC<{ surveyId: string }> = ({ surveyId }) => {
  const [responses, setResponses] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection('surveys')
      .doc(surveyId)
      .collection('responses')
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data());
        setResponses(data);
      });

    return () => unsubscribe();
  }, [surveyId]);

  return (
    <div>
      <h2>Survey Responses</h2>
      <ul>
        {responses.map((response, index) => (
          <li key={index}>{JSON.stringify(response.answers)}</li>
        ))}
      </ul>
    </div>
  );
};

export default SurveyResponses;
