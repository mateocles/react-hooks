import { useState } from "react";
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import Userlist from "./components/Userlist.jsx";

function App() {
  const [patients, setPatiens] = useState([]);

  return (
    <div className="container mx-auto mt-20 ">
      <Header />
      <div className="mt-12 md:flex">
        <Form patients={patients} setPatiens={setPatiens} />
        <Userlist patients={patients} />
      </div>
    </div>
  );
}

export default App;
