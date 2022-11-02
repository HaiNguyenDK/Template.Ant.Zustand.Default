import React from 'react';
import ReactDOM from "react-dom/client";
import './@leo/services';
import './shared/styles/main.less';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
