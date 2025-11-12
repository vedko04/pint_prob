import {Button} from "@vega-ui/react";
import {Link} from "react-router";
import "./User.css";

const Userpage = () => {
    return (
        <div>
            <h1>your profile!</h1>
            <Link to="/"><Button>Back to Home</Button></Link>
        </div>
    );
};

export default Userpage;