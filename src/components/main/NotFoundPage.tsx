import {Link, Route, Routes} from "react-router-dom";
import {Button} from "@vega-ui/react";
import App from "../../App.tsx";

const NotFoundPage = () => {
    return (
        <div>
            <h1>Not Found Page X</h1>
            <Link to="/">
                <Button>Back to Home</Button>
            </Link>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </div>
    );
};

export default NotFoundPage;