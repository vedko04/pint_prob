import {
    Avatar,
    AvatarFallback,
    Icon,
    IconButton,
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@vega-ui/react";
import {Heart, Settings, User } from "@vega-ui/icons";
import {Link} from "react-router-dom";

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
                        <Link to='/User'><Icon><Heart/></Icon></Link>
                    </IconButton>
                    <IconButton asChild>
                        <a href='#'><Icon><User/></Icon></a>
                    </IconButton>
                    <IconButton asChild>
                        <a href='#'><Icon><Settings/></Icon></a>
                    </IconButton>
                </PopoverContent>
            </Popover>
        </div>

    );
};

export default Avatar_icon;