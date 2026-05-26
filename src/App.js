import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <main className="app">
      <section className="box">
        <h1>useState 실습</h1>

        <input
          value={name}
          onChange={handleChange}
          placeholder="이름을 입력하세요"
        />

        <p>입력한 이름: {name}</p>
      </section>
    </main>
  );
}

export default App;
