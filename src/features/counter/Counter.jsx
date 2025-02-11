import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";
const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);
    const verifyAmount = Number(amount) || 0;

    function resetAll() {
        setAmount(0);
        dispatch(reset());
    }
    return (
        <>
            <section>
                <p>{count}</p>
                <div>
                    <button onClick={() => dispatch(increment())}>+</button>
                    <button onClick={() => dispatch(decrement())}>-</button>
                </div>
                <div>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    <button onClick={() => dispatch(incrementByAmount(verifyAmount))}>add amount</button>
                </div>
                <button onClick={resetAll}>Reset All</button>
            </section>
        </>
    )
}

export default Counter;