import axios from "axios";
import React from "react";
import Loading from "../../components/loading/loading";
import { GlobalContext } from "../../contexts/globalProviders";

const Home = () => {
  const { state, setState } = React.useContext(GlobalContext);
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setLoading(false);
        setTodos(response.data);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      <div>
        <h1>{state.name}</h1>
        <h1>{state.email}</h1>
      </div>
      <div>
        <h2>Todos</h2>
        <ul>
          {loading ? (
            <Loading />
          ) : (
            todos.map((todo) => (
              <li key={todo.id}>
                <p>{todo.title}</p>
              </li>
            ))
          )}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Home;
