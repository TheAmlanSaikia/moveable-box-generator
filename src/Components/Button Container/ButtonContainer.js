import styles from './ButtonContainer.module.css';
import { useBox } from "../../Context/BoxContext";

const ButtonContainer =()=>{
    const { boxState, boxDispatch } = useBox();
    return (
        <section className={styles.buttonContainer}>
        <button
          className={styles.btn}
          onClick={() =>
            boxDispatch({ type: "ADD_BOX", payload: boxState.boxData.length })
          }>
          Increase Box
        </button>
        <label>
          <input
            type='checkbox'
            value={boxState.keyBoardCheck}
            checked={boxState.keyBoardCheck}
            onChange={(e) =>
              boxDispatch({ type: "ADD_KEYBOARD", payload: e.target.value })
            }
          />
          KeyBoard
        </label>
        <button
          className={styles.btnClr}
          onClick={() => boxDispatch({ type: "CLEAR_ALL", payload: "" })}>
          Clear All
        </button>
      </section>
    )
}


export { ButtonContainer };