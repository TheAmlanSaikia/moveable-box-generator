const boxReducerFunction = (boxState, { type, payload }) => {
  switch (type) {
    case "ADD_BOX":
      return [
        ...boxState,
        {
          id: payload,
          zIndex: payload
        },
      ];
    default:
      return boxState;
  }
};

export { boxReducerFunction };
