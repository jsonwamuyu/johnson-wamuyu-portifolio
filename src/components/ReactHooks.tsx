import { use, useState } from "react";

const ReactHooks = () => {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter((prev) => prev + 1);
  };
  const decreaseCounter = () => {
    setCounter((prev) => prev - 1);
  };
  const clearCounter = () => {
    setCounter(0);
  };
  return (
    <div className="wrapper">
      <div className="container flex-col gap-8">
        <div className="flex flex-col gap-2 mb-4">
          <h2 className="font-bold text-4xl">ReactHooks</h2>
          <p className="w-full md:max-w-2xl">
            Learn about <span className="font-bold">React Hooks</span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4>1. UseState Hook</h4>
          <p className="w-full md:max-w-lg">
            This create a state variable in functional component. We use this
            variable to manage state in a component by tracking the changes in
            this variable. When the state changes, we update the user interface.
          </p>
          <p>
            Counter{" "}
            <span className="font-bold text-3xl text-indigo-500">
              {counter}
            </span>
          </p>
          <div className="space-x-8">
            <button
              onClick={increaseCounter}
              className="font-semibold rounded-full px-4 py-2 bg-indigo-500 text-white cursor-pointer outline-none"
            >
              Increase +
            </button>
            <button
              onClick={decreaseCounter}
              className="font-semibold bg-transparent px-4 py-2 border-[2px]
             border-indigo-500 rounded-full cursor-pointer outline-none"
            >
              Decrease -
            </button>
            <button
              className="font-semibold px-4 py-2 border-[2px] border-white rounded-full cursor-pointer outline-none"
              onClick={clearCounter}
            >
              Clear counter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactHooks;
