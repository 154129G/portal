import React, { useState } from 'react';

function ErrorBound({ children }) {
  const [hasError, setHasError] = useState(false);

  const handleCatch = (error, errorInfo) => {
    // You can log the error to an error reporting service
    console.log(error, errorInfo);
    setHasError(true);
  }

  if (hasError) {
    // You can render any custom fallback UI
    return <h1>Something went wrong.</h1>;
  }

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

export default ErrorBound;
