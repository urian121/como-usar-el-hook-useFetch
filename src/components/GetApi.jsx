import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

const GetApi = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul className="list-group list-group-flush">
      {data && (
        <ul>
          {data.map((item) => (
            <li className="list-group-item" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </ul>
  );
};

export default GetApi;
/**
 * useFetch" es un gancho personalizado que maneja la lógica de la solicitud de red. Devuelve los datos, el estado de carga y cualquier error que ocurra durante la solicitud. Luego, en el componente "MyComponent", se utiliza este gancho para realizar una solicitud a una URL y mostrar los datos resultantes, el estado de carga o cualquier error
 */
