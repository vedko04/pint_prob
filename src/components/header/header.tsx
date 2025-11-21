import {TextField} from '@vega-ui/react';
import "./Header.css";
import Avatar_icon from "./Avatar_icon.tsx";
import Add_post from "./Add_post.tsx";
import Home_page from "./Home_page.tsx";
import Bell_icon from "./Bell_icon.tsx";

const Header = () => {
    return (
        <header className="Header">
            <TextField className='input' wrapperClassName='header_search' placeholder={'Search...'}/>

            <div className={'Header_mini_icon'} >
                <Home_page/>
                <Add_post/>
                <Bell_icon/>
                <Avatar_icon/>
            </div>
        </header>
    );
};

export default Header;