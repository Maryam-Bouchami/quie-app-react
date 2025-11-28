import { Link } from "react-router-dom";
import styles from "./nav.module.css";
export default function Nav() {
  return (
    <div className={styles.navbar}>
      <div>
        <img src="/quiz.png" />
      </div>
      <div>
        <Link to="/">Home Page </Link>
      </div>
    </div>
  );
}
