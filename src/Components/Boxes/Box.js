import styles from "./Box.module.css";

const Box = ({ zIndex }) => {
  return (
    <div
      style={{
        zIndex: zIndex,
      }}
      className={styles.boxStyle}>
      {" "}
    </div>
  );
};

export { Box };
