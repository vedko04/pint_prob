import {Avatar, AvatarFallback, Button} from "@vega-ui/react";
import './User_info.css'

const UserInfo = () => {
    return (
        <div className="user-info">
            <Avatar size="2xl">
                <AvatarFallback>
                    BC
                </AvatarFallback>
            </Avatar>
            <div className="text_user_info">
                <h3>VedkoSVO1488</h3>
                <p>Iam 21 years. Love anime and femboys</p>
            </div>
            <Button>Edit</Button>
        </div>
    );
};

export default UserInfo;