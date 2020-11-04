import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const UserDialogDateToMessages = [
  { id: 1, name: 'Shapagat' },
  { id: 2, name: 'Alisher' },
  { id: 3, name: 'Sveta' },
  { id: 4, name: 'Katya' },
  { id: 5, name: 'Dizi' },
  { id: 6, name: 'Dmitry' },
]

const UserMessagesDateToMessages = [
  { id: 1, messages: 'hello' },
  { id: 2, messages: 'How are you ?' },
  { id: 3, messages: 'I\'m good' },
  { id: 4, messages: 'Okay, I get it' },
  { id: 5, messages: 'Okay, I get it' },
  { id: 6, messages: 'Okay, I get it' },
]


ReactDOM.render(
  <React.StrictMode>
    <App UserDialogDateToMessages={UserDialogDateToMessages} UserMessagesDateToMessages={UserMessagesDateToMessages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
