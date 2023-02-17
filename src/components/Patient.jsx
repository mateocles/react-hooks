function Patient({ patient }) {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-grey-700 uppercase">
        Nombre: <span className="font-normal normal-case">{patient.name}</span>
      </p>
      <p className="font-bold mb-3 text-grey-700 uppercase">
        Nombre Propietario:{" "}
        <span className="font-normal normal-case">{patient.nameProperty}</span>
      </p>
      <p className="font-bold mb-3 text-grey-700 uppercase">
        Email: <span className="font-normal normal-case">{patient.email}</span>
      </p>
      <p className="font-bold mb-3 text-grey-700 uppercase">
        Fecha Alta:{" "}
        <span className="font-normal normal-case">{patient.dateUp}</span>
      </p>
      <p className="font-bold mb-3 text-grey-700 uppercase">
        Sintomas: <span className="font-normal normal-case">{patient.sym}</span>
      </p>
    </div>
  );
}

export default Patient;
