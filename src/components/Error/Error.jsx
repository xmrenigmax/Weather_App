import './Error.css';

const Error = ({ message, onRetry }) => {
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-icon">⚠️</div>
        <h3>Oops! Something went wrong</h3>
        <p className="error-message">{message}</p>
        <button onClick={onRetry} className="retry-button">
          🔄 Try Again
        </button>
      </div>
    </div>
  );
};

export default Error;