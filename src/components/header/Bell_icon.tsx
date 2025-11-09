import {Button, Icon, IconButton, Popover, PopoverContent, PopoverTrigger} from "@vega-ui/react";
import {Bell} from "@vega-ui/icons";
import './Bell_icon.css'

const Bell_icon = () => {

    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <IconButton>
                        <Icon><Bell /></Icon>
                    </IconButton>
                </PopoverTrigger>
                <PopoverContent className="menu">
                    <Button size={'xs'} variant={''}>
                        поставлен лайк
                    </Button>
                    <Button size={'xs'} variant={''}>
                        на вас подписались
                    </Button>
                </PopoverContent>
            </Popover>
        </div>

    );
};

export default Bell_icon;