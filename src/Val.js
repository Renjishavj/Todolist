import { useState } from 'react';

const Val = () => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const correct = "india";

  const handleSubmit = () => {
    if (answer === correct) {
      console.log("correct");
      setError('correct answer');
    } else {
      console.log("incorrect");
      setError('Incorrect answer.');
    }
  }

  return (
    <>
      <h1>City Quiz</h1>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <textarea
        name=''
        cols='30'
        rows='4'
        style={{ display: 'block' }}
        onChange={e => setAnswer(e.target.value)}>
        </textarea>
      
      <button type='button' onClick={handleSubmit}>Submit</button>
      
       <span style={{ color: 'red' }}>{error}</span>
    </>
  );
};

export default Val;
