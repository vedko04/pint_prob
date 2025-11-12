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
import { Link } from "react-router";

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
        </div>

    );
};

export default Avatar_icon;