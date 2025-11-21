import {Link} from "react-router";
import {Icon, IconButton} from "@vega-ui/react";
import {House} from "@vega-ui/icons";

const HomePage = () => {
    return (
        <div>
            <IconButton asChild>
                <Link to="/"><Icon><House /></Icon></Link>
            </IconButton>
        </div>
    );
};

export default HomePage;