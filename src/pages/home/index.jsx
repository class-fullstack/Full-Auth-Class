import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/loading/loading";
import SEO from "../../components/seo/seo";
import { keyLocalStorage } from "../../constants/keyConstant";
import { GlobalContext } from "../../contexts/globalProviders";
import axiosInstance from "../../libs/axiosInterceptor";
import {
  decrement,
  increment,
  reset,
} from "../../redux/actions/counterActions";
import { getFromLocalStorage } from "../../utils/localStorage";

const Home = () => {
  const { state, setState } = React.useContext(GlobalContext);
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);
  const { count } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  React.useEffect(() => {
    setLoading(true);
    const token = getFromLocalStorage(keyLocalStorage.accessToken);
    if (token) {
      axiosInstance
        .get("/users/profile")
        .then((response) => {
          setLoading(false);
          if (response.status === 200) {
            setUser(response.data.user);
          }
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  }, []);

  return (
    <React.Fragment>
      <SEO title="Home" description="Welcome to the homepage of My Website." />
      <div>
        <h1>{state.name}</h1>
        <h1>{state.email}</h1>
      </div>
      <div>
        <h2>Todos</h2>
        <ul>
          {loading ? (
            <Loading />
          ) : user ? (
            <li>
              <p>
                <b>UserId:</b> {user.id}
              </p>
              <p>
                <b>Email:</b> {user.email}
              </p>
              <p>
                <b>Username:</b> {user.username}
              </p>
            </li>
          ) : (
            <li>No user found</li>
          )}
        </ul>
      </div>

      <h1>
        Pi:
        <span style={{ color: "red" }}>{count}</span>
      </h1>
      <button
        style={{
          width: "100px",
          height: "50px",
        }}
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        style={{
          width: "100px",
          height: "50px",
        }}
        onClick={() => dispatch(decrement())}
      >
        -
      </button>

      <button
        style={{
          width: "100px",
          height: "50px",
        }}
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </React.Fragment>
  );
};

export default Home;
