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
                        <Icon><Settings /></Icon>
                    </IconButton>
                </PopoverContent>
            </Popover>
            <Routes>
                <Route path="/User" element={<Userpage />} />
            </Routes>
        </div>

    );
};

export default Avatar_icon;