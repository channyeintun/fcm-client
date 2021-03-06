import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import ConfigRoute from './App';

if ("serviceWorker" in navigator) {
      navigator.serviceWorker
            .register("./firebase-messaging-sw.js")
            .then(function (registration) {
                  console.log("Registration successful, scope is:", registration.scope);
            })
            .catch(function (err) {
                  console.log("Service worker registration failed, error:", err);
            });
}

ReactDOM.render(
      <React.StrictMode>
            <ConfigRoute />
      </React.StrictMode>,
      document.getElementById('root')
);

reportWebVitals();