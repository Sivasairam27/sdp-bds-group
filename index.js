import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './index.css'; 
import App from './App'; 
import reportWebVitals from './reportWebVitals'; 
const notes=[
   {
      id: 1, 
     name: "ABC",
     age: 26
 },
   {
        id: 2, 
       name: "DEF",
       age: 25
   },    
  {

       id:3, 
       name: "GHI",
      age: 25
   }
] 
ReactDOM.render(<App notes={notes}/>,document.getElementById('root'))
 
// If you want to start measuring performance in your app, pass a function 
// to log results (for example: reportWebVitals(console.log)) 
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals 
reportWebVitals();