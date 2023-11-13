import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <nav className="taskCont">
      <div>
        <Link className="taskContL" to="/Task1">
          TASK 1 Watches
        </Link>
        <Link className="taskContL" to="/Task2">
          TASK 2 CRUD
        </Link>
        {/* <Link className="taskContL" to="/Task3">
          TASK 3
        </Link> */}
      </div>
    </nav>
  );
}

export function Backe() {
  return (
    <nav className="taskCont">
      <Link className="taskContL" to="/">
        BACK
      </Link>
    </nav>
  );
}
