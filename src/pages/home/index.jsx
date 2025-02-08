import React from "react";
import { GlobalContext } from "../../contexts/globalProviders";

const Home = () => {
  const { state, setState } = React.useContext(GlobalContext);

  return (
    <React.Fragment>
      <div>
        <h1>{state.name}</h1>
        <h1>{state.email}</h1>
      </div>
    </React.Fragment>
  );
};

export default Home;
