import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <p>this is error page</p>
      <Link to={"/"}>
        <button>Go back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
