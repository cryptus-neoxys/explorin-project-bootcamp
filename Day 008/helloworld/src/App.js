import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [fullName, setFullName] = useState("");
  const [toggle, setToggle] = useState(false);
  const [list, setList] = useState([]);

  const inc = () => {
    setCounter(counter + 1);
  };

  const dec = () => {
    setCounter(Math.max(counter - 1, 0));
  };

  useEffect(() => {
    // IIFE: Immediately Invoked Function Expression
    (async () => {
      try {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts");
        data = await data.json();
        setList(data);
      } catch (err) {
        console.error(err);
      }
    })();
    console.log("useEffect");
  }, []);

  return (
    <div>
      <div>
        <h1>{counter}</h1>
        <button onClick={() => inc()}>+</button>
        <button onClick={() => dec()}>-</button>
      </div>
      <div>
        <label htmlFor="full-name">Full Name: </label>
        <input
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          type="text"
          name="full-name"
          id="fullname"
        />
      </div>
      <div>
        <button onClick={() => setToggle(!toggle)}>
          Set Toggle: {toggle ? "true" : "false"}
        </button>
        {toggle && <h2>toggle is on!</h2>}
      </div>
      <ol>
        {list.map((el) => (
          <li>{el.body}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
