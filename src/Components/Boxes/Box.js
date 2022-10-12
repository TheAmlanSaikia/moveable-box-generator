import React, { useEffect, useRef } from "react";
import { useBox } from "../../Context/BoxContext";
import styles from "./Box.module.css";

/**
 *
 * @param {} id, zIndex, position, transform values
 * @returns renders box
 */

const Box = ({
  id,
  zIndex,
  selected,
  top,
  left,
  transformUp,
  transformLeft,
  //   positionValue,
}) => {
  const positionRef = useRef();
  const { boxState, boxDispatch } = useBox();
  const { keyBoardCheck } = boxState;

  /**
   *  add or remove keydown events
   */
  useEffect(() => {
    if (keyBoardCheck && selected) {
      window.addEventListener("keydown", boxMovement);
    }
    return () => {
      window.removeEventListener("keydown", boxMovement);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, keyBoardCheck]);

 /**
  * get box position values
  */
  useEffect(() => {
    const { offsetTop, offsetLeft } = positionRef.current;
    boxDispatch({
      type: "ADD_POSITION",
      top: offsetTop,
      left: offsetLeft,
      id: id,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  /**
   * 
   * @param {*} event 
   * @returns triggers reducer function on keydown
   *  
   */

  const boxMovement = (event) => {
    if (selected) {
      switch (event.keyCode) {
        case 38:
          return boxDispatch({
            type: "MOVE_BOX",
            payload: "up",
            id: id,
          });
        case 40:
          return boxDispatch({
            type: "MOVE_BOX",
            payload: "down",
            id: id,
          });
        case 39:
          return boxDispatch({
            type: "MOVE_BOX",
            payload: "right",
            id: id,
          });
        case 37:
          return boxDispatch({
            type: "MOVE_BOX",
            payload: "left",
            id: id,
          });
        default:
          return;
      }
    }
  };

  return (
    <div
      ref={positionRef}
      style={
        selected
          ? {
              zIndex: zIndex,
              //   position: positionValue,
              top: top,
              left: left,
              backgroundColor: "#F7DBD7",
              transform: `translate(${transformLeft}px, ${transformUp}px)`,
            }
          : {
              zIndex: zIndex,
              top: top,
              left: left,
              //   position: positionValue,
            }
      }
      className={styles.boxStyle}
      onClick={() => {
        return boxDispatch({
          type: "SELECT_BOX",
          payload: id,
        });
      }}>
      {" "}
      {id}{" "}
    </div>
  );
};

export { Box };
