
import './Bell_icon.css'
import {Icon, IconButton, Popover, PopoverContent, PopoverTrigger} from "@vega-ui/react";
import {Bell} from "@vega-ui/icons";

const Bell_icon = () => {

    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <IconButton>
                        <Icon><Bell/></Icon>
                    </IconButton>
                </PopoverTrigger>
                <PopoverContent className="menu">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </PopoverContent>
            </Popover>
        </div>

    );
};

export default Bell_icon;