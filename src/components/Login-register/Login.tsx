import { Link } from "react-router";
import {Button} from "@vega-ui/react";

const Login = () => {
    return (
        <div>
            <Link to="/"><Button>Go to main page</Button></Link>
        </div>
    );
};

export default Login;