import Question from "./Question";

export default function QuestionsList({ questions }) {
  return (
    <>
      <h3>C'est une question</h3>
      {questions.map((question) => (
        <Question question={question} />
      ))}
    </>
  );
}
