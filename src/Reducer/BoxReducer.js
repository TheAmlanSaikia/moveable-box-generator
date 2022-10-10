
const boxReducerFunction = (boxState, { type, payload }) => {
  switch (type) {
    case "ADD_BOX":
      return [
        ...boxState,
        {
          id: payload,
          zIndex: payload,
          selected: false,
        },
      ];

    case "ADD_TABINDEX": 
    console.log(payload);
     return boxState.map((box) => 
        box.id === payload ? {...box, selected: true} : {...box, selected: false}
      )
    default:
      return boxState;
  }
};

export { boxReducerFunction };
