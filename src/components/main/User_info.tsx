import {Avatar, AvatarFallback, AvatarImage, Button} from "@vega-ui/react";
import type {UserType} from "../../data/types";
import './User_info.css'
import React from "react";

type Props ={
    user?: UserType;
}

const UserInfo: React.FC<Props> = ({user}) => {
    return (
        <div className="user-info">
            <Avatar size="2xl">
                <AvatarFallback>
                    BC
                </AvatarFallback>
                <AvatarImage src={user?.avatar}/>
            </Avatar>
            <div className="text_user_info">
                <h3>{user?.name}</h3>
                <p>{user?.desription}</p>
            </div>
            <Button>Edit</Button>
        </div>
    );
};

export default UserInfo;