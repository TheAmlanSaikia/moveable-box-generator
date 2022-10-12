const boxReducerFunction = (boxState, { type, payload, id, top, left }) => {
  switch (type) {
    case "ADD_BOX":
      return {
        ...boxState,
        boxData: [
          ...boxState.boxData,
          {
            id: payload,
            zIndex: payload,
            selected: false,
            top: 0,
            left: 0,
            transformUp: 0,
            transformLeft: 0,
            positionValue: "static",
          },
        ],
      };

    case "ADD_KEYBOARD":
      console.log(payload);
      return {
        ...boxState,
        keyBoardCheck: !boxState.keyBoardCheck,
      };
    case "SELECT_BOX":
      console.log(payload);
      return {
        ...boxState,
        boxData:
          boxState.boxData.length > 0 &&
          boxState.boxData.map((box) =>
            box.id === payload
              ? { ...box, positionValue: "absolute", selected: true }
              : { ...box, selected: false, positionValue: "absolute" }
          ),
      };

    case "ADD_POSITION":
      return {
        ...boxState,
        boxData:
          boxState.boxData.length > 0 &&
          boxState.boxData.map((box) =>
            box.id === id ? { ...box, top, left } : box
          ),
      };

    case "MOVE_BOX":
      return {
        ...boxState,
        boxData:
          boxState.boxData.length > 0 &&
          boxState.boxData.map((box) => {
            if (box.id === id && box.selected) {
              if (payload === "up") {
                // return { ...box, top: box.top > 0 ? box.top - 10 : box.top};
                return { ...box, transformUp: box.transformUp - 10 };
              } else if (payload === "down") {
                //  return {...box, top: box.top + 10}
                return { ...box, transformUp: box.transformUp + 10 };
              } else if (payload === "left") {
                // return { ...box, left: box.left > 7 ? box.left-10 : box.left};
                return { ...box, transformLeft: box.transformLeft - 10 };
              } else if (payload === "right") {
                //  return {...box, left: box.left< 1030 ? box.left+10 : box.left}
                return { ...box, transformLeft: box.transformLeft + 10 };
              }
            }
            return box;
          }),
      };

    case "CLEAR_ALL": {
      return {
        keyBoardCheck: false,
        boxData: [],
      };
    }

    default:
      return boxState;
  }
};

export { boxReducerFunction };
