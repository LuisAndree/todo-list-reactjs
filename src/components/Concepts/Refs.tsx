import React, {useRef} from "react"

export const Refs: React.FC = () => {
    const ref = useRef(0); // { current: 0}

    return (
        <div>
            <h1>useRef</h1>
            <p>{`O valor da Ref é ${ref.current}`}</p>
        </div>
    );
};