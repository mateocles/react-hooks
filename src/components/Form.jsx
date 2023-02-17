import { useEffect, useState } from "react";

function Form({ patients, setPatiens }) {
  const [name, setName] = useState("");
  const [nameProperty, setNameProperty] = useState("");
  const [email, setEmail] = useState("");
  const [dateUp, setDateUp] = useState("");
  const [sym, setSym] = useState("");

  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // validacion
    if ([name, nameProperty, email, dateUp, sym].includes("")) {
      console.log("revisar formulario");

      setError(true);
      return;
    }
    const payload = {
      name,
      nameProperty,
      email,
      dateUp,
      sym,
    };
    setPatiens([...patients, payload]);
    cleanForm();
    setError(false);
  };
  const cleanForm = (e) => {
    setName("");
    setNameProperty("");
    setEmail("");
    setDateUp("");
    setSym("");
  };
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Paciente</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Paciente y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        action=""
      >
        {error && (
          <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
            <p>Todos los campos son obligarios</p>
          </div>
        )}
        <div className="mb-5">
          <label
            className="block text-grey-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 round-md"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-grey-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 round-md"
            value={nameProperty}
            onChange={(e) => {
              setNameProperty(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-grey-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 round-md"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-grey-700 uppercase font-bold"
            htmlFor="alta"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 round-md"
            value={dateUp}
            onChange={(e) => {
              setDateUp(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-grey-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 round-md"
            value={sym}
            onChange={(e) => {
              setSym(e.target.value);
            }}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Agregar"
        />
      </form>
    </div>
  );
}

export default Form;
