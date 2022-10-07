import { useState } from "react";

function Detective() {
  const [sherlock, setSherlock] = useState("психопат");
  function handleClick() {
    return setSherlock("высокоактивный социопат");
  }
  return (
    <div>
      <div>Шерлок - {sherlock}</div>
      <button onClick={handleClick}>Узнать правду</button>
    </div>
  );
}

export default Detective;
