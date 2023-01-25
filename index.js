const { useState, useEffect, useContext, useRef, useMemo } = React;


function App() {

  const today = new Date();
  const initialDate = new Date('2022-11-15');
  const timeinmilisec = today.getTime() - initialDate.getTime();
  const totalDays = Math.ceil(timeinmilisec / (1000 * 60 * 60 * 24));
  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear()  
  const daysInMonth = new Date(year, month, 0).getDate()
  const days = totalDays%daysInMonth
  const months = (Math.floor(totalDays/daysInMonth))%12
  const years = Math.floor((Math.floor(totalDays/daysInMonth))/12)

    return <h1>I have been coding for 
        <></> {years > 0 ? years : null} <span style={years > 0 ? {} : {display:'none'}}>year<span style={years > 1 ? {} : {display:'none'}}>s</span></span>
        <></> {months > 0 ? months : null} <span style={months > 0 ? {} : {display:'none'}}>months</span>
        <></> {days > 0 ? days : null} <span style={days > 0 ? {} : {display:'none'}}>days</span>
        </h1>

    };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
