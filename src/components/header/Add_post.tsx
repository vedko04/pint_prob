import {
    Icon,
    IconButton,
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@vega-ui/react";
import { Plus } from "@vega-ui/icons";

const AddPost = () => {
    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <IconButton>
                        <Icon><Plus /></Icon>
                    </IconButton>
                </PopoverTrigger>
                <PopoverContent className="menu">

                </PopoverContent>
            </Popover>
        </div>
    );
};

export default AddPost;