const Type = {
  inCrement: "INCREMENT",
  deCrement: "teacher",
};

export const DigPiReducer = (state, action) => {
  switch (action.type) {
    case Type.inCrement:
      return { count: state.count + 1 };
    case Type.deCrement:
      return { count: state.count - 1 };
    default:
      return state;
  }
};
