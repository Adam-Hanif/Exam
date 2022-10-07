import log from "./logo-2.png";
import Detective from "./Detective";

function Base() {
  return (
    <div>
      <h1>Hallow</h1>
      <img src={log} alt="logo" />
      <Detective />
    </div>
  );
}

export default Base;
