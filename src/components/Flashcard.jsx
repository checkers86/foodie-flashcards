import { useState } from "react";

function Flashcard({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const flipCard = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="flashcard" onClick={flipCard}>
      <h2>{showAnswer ? answer : question}</h2>

      <p>
        {showAnswer ? "Click to see the question" : "Click to reveal the answer"}
      </p>
    </div>
  );
}

export default Flashcard;