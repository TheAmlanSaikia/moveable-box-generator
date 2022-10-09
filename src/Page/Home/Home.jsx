import { Box } from "../../Components";
import { useBox } from "../../Context/BoxContext";
import styles from "./Home.module.css";

const Home = () => {
  const { boxState, boxDispatch } = useBox();
  return (
    <div className={styles.mainContainer}>
      <section className={styles.buttonContainer}>
        <button
          className={styles.btn}
          onClick={() =>
            boxDispatch({ type: "ADD_BOX", payload: boxState.length })
          }>
          Increase Box
        </button>
      </section>
      <section className={styles.boxContainer}>
        {boxState &&
          boxState.map(({ id, zIndex }) => {
            return <Box key={id} zIndex={zIndex} />;
          })}
      </section>
      {console.log(boxState)}
    </div>
  );
};

export { Home };
