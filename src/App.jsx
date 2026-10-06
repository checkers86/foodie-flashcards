import { useState } from "react";
import Flashcard from "./components/Flashcard";
import "./App.css";

function App() {
  const flashcards = [
    {
      question: "What fruit has its seeds on the outside?",
      answer: "Strawberry",
    },
    {
      question: "What country is pizza originally from?",
      answer: "Italy",
    },
    {
      question: "What is the main ingredient in guacamole?",
      answer: "Avocado",
    },
    {
      question: "What vegetable is traditionally used to make pickles?",
      answer: "Cucumber",
    },
    {
      question: "What food is made from fermented milk?",
      answer: "Yogurt",
    },
    {
      question: "What is sushi commonly wrapped in?",
      answer: "Seaweed",
    },
    {
      question: "What fruit is known for being high in potassium?",
      answer: "Banana",
    },
    {
      question: "What type of pasta is shaped like little bows?",
      answer: "Farfalle",
    },
  ];

  const [currentCard, setCurrentCard] = useState(0);

  const showNextCard = () => {
    const randomCard = Math.floor(Math.random() * flashcards.length);
    setCurrentCard(randomCard);
  };

  return (
    <div className="app">
      <h1>🍴 Foodie Flashcards</h1>

      <p>
        Test your food knowledge! Click the card to reveal the answer.
      </p>

      <p>Total Cards: {flashcards.length}</p>

      <Flashcard
        question={flashcards[currentCard].question}
        answer={flashcards[currentCard].answer}
      />

      <button onClick={showNextCard}>Next Card</button>
    </div>
  );
}

export default App;