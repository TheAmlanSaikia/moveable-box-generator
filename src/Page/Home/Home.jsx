import { Box, ButtonContainer } from "../../Components";
import { useBox } from "../../Context/BoxContext";
import styles from "./Home.module.css";

/**
 *
 * @returns renders Home page
 */

const Home = () => {
  const { boxState } = useBox();
  return (
    <div className={styles.mainContainer}>
      <ButtonContainer />
      <section className={styles.boxContainer}>
        {boxState.boxData.length > 0 &&
          boxState.boxData.map(
            ({
              id,
              zIndex,
              selected,
              top,
              left,
              transformUp,
              transformLeft,
              positionValue,
            }) => {
              return (
                <Box
                  key={id}
                  selected={selected}
                  id={id}
                  zIndex={zIndex}
                  top={top}
                  left={left}
                  transformUp={transformUp}
                  transformLeft={transformLeft}
                  positionValue={positionValue}
                />
              );
            }
          )}
      </section>
    </div>
  );
};

export { Home };
