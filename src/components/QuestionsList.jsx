import Question from "./Question";
import questions from "../quiz-litteraire.json";

export default function QuestionsList() {
  return (
    <>
      <h3>c'est une question</h3>
      {questions.map((question) => (
        <Question question={question} />
      ))}
      {/* Ceci est un commentaire en JSX 
      
            <Question
        question={{
          qu: "Qui a écrit le recueil de poésie Les Fleurs du mal?",
          item1: "Paul Verlaine",
          item2: "Charles Baudelaire",
          item3: "Arthur Rimbaud",
        }}
      />
      
      
      */}
    </>
  );
}
