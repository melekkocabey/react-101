import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import User from './components/User';

import Counter from './components/Counter';
import Colors from './components/Colors';
import Form from './components/Form';
import { useState } from 'react';

const isLoggedIn = true;
let fullname = "Melek Kocabey";

/* const user={
  name: "Bekir Furkan",
  surname:"ZADEGİL",
  age: 29,
}; *//* özne */
function App() {
  const [isVisible, setIsVisible] = useState(true);//
  return (
    <div className="App">
      {
        isVisible && <Counter />
      }
      <button onClick={() => setIsVisible(!isVisible)}>Göster/Gizle</button>

      {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <Header/>
      {
        isLoggedIn ? <div>Hoşgeldin {fullname}</div> : <Login/>
      } */}
      {/* <User name="Melek" age = {27} city="istanbul" />  */}
      <User /* title="Kişi" */ /* data={{
        name: "Bekir Furkan",
        city: "istanbul",
        age: 29,
      }} friends={["İlknur", "Reşit", "Melisa", "Seda"]}  *//> {/* eğer bir array ile çalışmak property olarak bir array gönder */}
      <br />
      <br />
      <br />
      {/*  <Form /> */}
      {/*  <Colors /> */}
    </div>
  );
}

export default App;
