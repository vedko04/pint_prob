import "./User.css";
import Header from "../header/header.tsx";
import UserInfo from "./User_info.tsx";
import SavedPins from "./Saved_pins.tsx";

const Userpage = () => {
    return (
        <div>
            <Header/>
            <div className="User_gap_info">
                <UserInfo/>
                <SavedPins/>
            </div>
        </div>
    );
};

export default Userpage;