import React from "react";

function ErrorPage() {
    return (
        <div className="error">
        <div className="containe">
            <div className="error__content">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>
                The page you are looking for does not exist or has been moved.
            </p>
            <a href="/" className="btn">
                Go Back Home
            </a>
            </div>
        </div>
        </div>
    );
}

export default ErrorPage;