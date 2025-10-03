import "./error.scss";

const Error404 = () => {
  return (
    <div className="error-container">
      <h1>OPS...</h1>
      <h3>ERROR 404</h3>
      <p>
        Error: The server cannot find the requested web page or file at the
        specified address.
      </p>
      <a href="/">Go back Home</a>
    </div>
  );
};

export default Error404;
