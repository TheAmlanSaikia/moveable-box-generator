import React, { useEffect } from "react";
import { useBox } from "../../Context/BoxContext";
import styles from "./Box.module.css";

const Box = ({ id, zIndex, selected }) => {
  const { boxDispatch } = useBox();

  useEffect(() => {
    window.addEventListener("keydown", boxMovement);
  }, [selected]);

  const boxMovement = (event) => {
    if (selected) {
      console.log(event);
    }
  };

  return (
    <div
      style={{
        zIndex: zIndex,
      }}
      className={styles.boxStyle}
      onClick={() => {
        return boxDispatch({ type: "ADD_TABINDEX", payload: id });
      }}>
      {console.log(selected, id, zIndex, "tab index value in Box")}
    </div>
  );
};

export { Box };
