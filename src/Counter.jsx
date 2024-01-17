import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./ReduxServices/Actions";


const Counter = () => {
    const count = useSelector(state=> state.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment())
    };

    const handleDecrement = () => {
        dispatch(decrement())
    };

    const handleReset = () => {
        dispatch(reset())
    };

    return (
        <div>
            <h1>Counter</h1>
            <h3>Count: {count}</h3><br />
            <button onClick={handleIncrement}>Increment</button> <button onClick={handleDecrement}>Decrement</button> <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;