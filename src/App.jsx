import "./App.css";
import PersonList from "./components/PersonList";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import AddForm from "./components/AddForm";

function App() {
  const title = "My First App";
  const [data, setData] = useState([
    { id: 1, name: "ninewxd", gender: "ชาย" },
    { id: 2, name: "jaixd", gender: "หญิง" },
    { id: 3, name: "fightxd", gender: "ชาย" },
    { id: 4, name: "xxxx", gender: "หญิง" },
  ]);

  function deletePerson(id) {
    const result = data.filter((user) => user.id !== id); ///array new
    setData(result);
  }

  const [theam, setTheam] = useState(localStorage.getItem("mode") || "light");

  useEffect(() => {
    console.log("บันทึกการตั้งค่าโหมด");
    localStorage.setItem("mode",theam)
  }, [theam]);

  useEffect(() => {
    console.log("Render Component");
  }, []);

  //   useEffect(()=>{
  //   console.log("Render Component")
  // })

  return (
    <>
      <div className={theam}>
        <Header title={title} theam={theam} setTheam={setTheam} />
        <div>
          <AddForm data={data} setData={setData} />
        </div>
        <div>
          <PersonList data={data} deletePerson={deletePerson} />
        </div>
      </div>
    </>
  );
}

export default App;
