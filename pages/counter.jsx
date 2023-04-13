import { useSelector, useDispatch } from "react-redux";

import Layout from "../hoc/Layout";
import {
  resetCount,
  incrementCount,
  decrementCount,
} from "../redux/actions/Increment";

export default function Counter() {
  const count = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  const buttonClass =
    "text-xs border border-indigo-600 font-bold  rounded transition-all duration-200 ease-in group hover:opacity-80 py-3 px-5 flex items-center";

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <h1 className="my-8">
          Count: <span className="font-black">{count}</span>
        </h1>
        <div className="flex gap-4 pt-2">
          <button
            className={`${buttonClass}`}
            onClick={() => dispatch(incrementCount())}
          >
            Increment + 1
          </button>
          <button
            className={`${buttonClass}`}
            onClick={() => dispatch(decrementCount())}
          >
            Decrement - 1
          </button>
          <button
            className={`${buttonClass}`}
            onClick={() => dispatch(resetCount())}
          >
            Reset
          </button>
        </div>
      </div>
    </Layout>
  );
}
