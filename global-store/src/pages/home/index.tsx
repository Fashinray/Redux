
import { useSelector } from "react-redux"
import type { RootState } from "../../navigation/redux/store"

function Home() {
    const count = useSelector((state: RootState) => state.counter.value)
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}
export default Home