import React from 'react';

export default function Options() {
    
  const questions = ['people', 'films', 'species'];

  return (
    <div>
      {questions.map((question, index) => {
        return <button key={index}>{question}</button>;
      })}
    </div>
  );
}
