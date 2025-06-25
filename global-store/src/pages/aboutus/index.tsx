import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../redux/store"
import { decrement, decrementByAmount, increment, incrementByAmount } from "../../redux/counter"



function AboutUs() {
    const count = useSelector((state: RootState) => state.counter.value)

    const dispatch = useDispatch()

    const handleDecrease =()=>{
        dispatch(decrement())
    }

    const handleIncrease =()=>{
        dispatch(increment())
    }

    const handleIncreaseByAmount =()=>{
        dispatch(incrementByAmount(4))
    }

    const handleDecreaseByAmount =()=>{
        dispatch(decrementByAmount(6))
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={handleIncreaseByAmount}>IncreaseByAmount</button>
            <button onClick={handleDecreaseByAmount}>DecreaseByAmount</button>
        </div>
    )
}
export default AboutUs