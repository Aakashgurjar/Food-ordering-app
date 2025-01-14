import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'; 
import Store from './redux/Store';

//  it is also main.jsx
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <React.StrictMode>
{/* react connected to redux so use provider */}
    <Provider store={Store} > 
       <App />
    </Provider>
  
  </React.StrictMode>


);

