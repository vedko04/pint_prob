import "./User.css";
import Header from "../header/header.tsx";
import UserInfo from "./User_info.tsx";
import SavedPins from "./Saved_pins.tsx";
import {users} from "../../data/User";

const Userpage = () => {
    return (
        <div>
            <Header/>
            <div className="User_gap_info">
                <UserInfo user={users[0]}/>
                <SavedPins/>
            </div>
        </div>
    );
};

export default Userpage;