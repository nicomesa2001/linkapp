import React from 'react';
import SurveyForm from './components/SurveyForm';
import SurveyList from './components/SurveyList';

const App: React.FC = () => {
  return (
    <div>
      <SurveyForm />
      <SurveyList />
    </div>
  );
};

export default App;
