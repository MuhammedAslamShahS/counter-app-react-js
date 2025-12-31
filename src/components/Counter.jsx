import { React, useState } from "react";
import Button from "../UI/Button/Button";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    console.log(count);

    return (
        <div>
            <h1>{count}</h1>
            <Button onClick={increment} name={"add"} />
            <Button onClick={decrement} name={"remove"} />
        </div>
    );
};

export default Counter;
