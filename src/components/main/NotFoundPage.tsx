import {Button} from "@vega-ui/react";
import {Link} from "react-router";

const NotFoundPage = () => {
    return (
        <div>
            <h1>Not Found Page X</h1>
                <Link to="/"><Button>Back to Home</Button></Link>
        </div>
    );
};

export default NotFoundPage;