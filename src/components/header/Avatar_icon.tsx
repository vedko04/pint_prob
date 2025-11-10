import {
    Avatar,
    AvatarFallback,
    Icon,
    IconButton,
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@vega-ui/react";
import {Settings, User } from "@vega-ui/icons";
import {Link, Route, Routes} from "react-router-dom";
import Userpage from "./User_page.tsx";
import App from "../../App.tsx";
import NotFoundPage from "../main/NotFoundPage.tsx";

const Avatar_icon = () => {

    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Avatar size={'xl'}>
                        <AvatarFallback>
                            BC
                        </AvatarFallback>
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent className="menu">
                    <IconButton asChild>
                        <Link to="/User"><Icon><User /></Icon></Link>
                    </IconButton>
                    <IconButton asChild>
                        <Link to="*"><Icon><Settings /></Icon></Link>
                    </IconButton>
                </PopoverContent>
            </Popover>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/User" element={<Userpage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>

    );
};

export default Avatar_icon;