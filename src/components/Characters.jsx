import useFetchData from "../hooks/useFetchData";
import "../styles/characters.css";

export const Characters = () => {
  const { data, loading, error } = useFetchData(
    "https://rickandmortyapi.com/api/character"
  ); // Llama al hook

  if (loading) {
    return <div>Loading...</div>; // Muestra un mensaje de carga
  }

  if (error) {
    return <div>Error: {error}</div>; // Muestra el mensaje de error
  }
  return (
    <div className="row">
      {data.map((item) => (
        <div className="col" key={item.id}>
          <div className="card">
            <img src={item.image} alt={item.name} />
            <div className="card-boby">
              <h5 className="card-title">{item.name}</h5>
              <hr />
              <p className="">Species: {item.species} </p>
              <p className="">Location: {item.location.name} </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
