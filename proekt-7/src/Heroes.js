import { useState } from "react";

function Heroes() {
  const [names, setNames] = useState([
    "Шерлок Холмс",
    "Доктор Ватсон",
    "Профессор Мориарти",
    "Миссис Хадсон",
    "Ирен Адлер",
  ]);
  const handleDelete = (index) => {
    setNames([
      ...names.filter((item, id) => {
        if (id !== index) {
          return true;
        }
        return false;
      }),
    ]);
  };
  return (
    <ul>
      {names.map(function (item, index) {
        return (
          <li onClick={() => handleDelete(index)} key={index}>
            {item}
          </li>
        );
      })}
    </ul>
  );
}
export default Heroes;
