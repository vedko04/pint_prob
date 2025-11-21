import {
    Avatar,
    AvatarFallback,
} from "@vega-ui/react";
import { Link } from "react-router";
import './Avatar_icon.css';

const Avatar_icon = () => {

    return (
        <div>
            <Link to='/User' className='User_link'>
                <Avatar size={'xl'}>
                    <AvatarFallback>
                        BC
                    </AvatarFallback>
                </Avatar>
            </Link>
        </div>

    );
};

export default Avatar_icon;