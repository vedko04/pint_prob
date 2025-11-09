import {TextField} from '@vega-ui/react';
import "./Header.css";
import Avatar_icon from "./Avatar_icon.tsx";
import Bell_icon from "./Bell_icon.tsx";
import Add_post from "./Add_post.tsx";

const Header = () => {
    return (
        <header className="Header">
            <TextField placeholder={'Search...'}/>

            <div className={'Header_mini_icon'} >
                <Bell_icon/>
                <Add_post/>
                <Avatar_icon/>
            </div>
        </header>
    );
};

export default Header;