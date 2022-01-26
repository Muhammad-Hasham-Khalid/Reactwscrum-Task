import { useState } from "react";
import Flow1 from './Flow1';
import Flow2 from './Flow2';
import Flow3 from "./Flow3";
import Flow4 from "./Flow4";

const Signup = () => {
    const [screen, setScreen] = useState(0);
    return <div>
        {screen === 0 && <Flow1 setScreen={setScreen} />}
        {screen === 1 && <Flow2 setScreen={setScreen} />}
        {screen === 2 && <Flow3 setScreen={setScreen} />}
        {screen === 3 && <Flow4 setScreen={setScreen} />}
    </div>;
};

export default Signup;
