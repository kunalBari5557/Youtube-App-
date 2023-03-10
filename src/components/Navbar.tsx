import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../store/hooks";
// import { changeSearchTerm, clearSearchTerm, clearVideos } from "../store";
// import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";

function Navbar() {
    return (
        <div className="flex justify-between items-center  px-14 h-14 bg-[#212121] opacity-95 sticky top-0 z-50">
            <div className="flex gap-8 items-center text-2xl">
                <div>
                    <GiHamburgerMenu />
                </div>
                <Link to="/" >
                    <div className="flex gap-1 items-center justify-center">
                        <BsYoutube className="text-3xl text-red-600" />
                        <span className="text-xl font-medium">Youtube</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar