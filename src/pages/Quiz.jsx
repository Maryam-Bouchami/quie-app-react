import QuestionsList from "../components/QuestionsList";
import { useLocation } from "react-router-dom";

export default function Quiz() {
  const location = useLocation();
  const { questions } = location.state || { questions: [] };

  return (
    <div>
      This is quiz page
      <QuestionsList questions={questions} />
    </div>
  );
}
