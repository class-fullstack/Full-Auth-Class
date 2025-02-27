const initialState = { count: 0, fullname: "John Doe" };

const counterReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "INCREMENT":
      return { count: state.count + payload.count };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

export default counterReducer;
