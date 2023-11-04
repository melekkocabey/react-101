import React from 'react';/* react import edilmiş react ile react dom nedir ---->dosya boyutunu küçültmek için ayrıitırılmış */
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));/* root isminde bir sabit oluşturulmuş root id li eleman index.html de seçilmiş ve bunun içerisine yukarda import edilen app compenentini render et */
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
