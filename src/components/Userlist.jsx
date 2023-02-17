import Patient from "./Patient.jsx";

function Userlist({ patients }) {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-xl mt-5 text-center mb-10">
        Administra sus{" "}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      <div className="md:h-screen overflow-scroll mt-0 pt-0">
        {patients.map((patient) => {
          return (
            <div key={patient}>
              <Patient patient={patient} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Userlist;
