import { useState } from "react";

function States() {
  const [age, setAge] = useState(30);
  const [name, setName] = useState("Thanakrit");

  const increaseAge = () => {
    setAge(age + 1);
  };

  const decreaseAge = () => {
    setAge(age - 1);
  };
  function changeName() {
    const input = document.getElementById("name");
    setName(input.value);
    input.value = "";
  }
  return (
    <>
      <h2>ชื่อ : {name}</h2>
      <form action="">
        <input type="text" name="name" id="name" />
        <input type="button" value="submit" onClick={changeName} />
      </form>
      <h3>อายุ : {age}</h3>
      <button onClick={increaseAge}>Increase</button>
      <button onClick={decreaseAge}>Decrease</button>
      <button onClick={() => {setAge(30);}}>reset</button>
    </>
  );
}

export default States;
