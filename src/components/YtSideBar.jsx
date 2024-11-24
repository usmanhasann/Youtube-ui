import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";

const SideBar = () => {
  return (
    <>
      <div className="fixed left-0  z-[2028] p-[0 4px] inline-block">
        <div className="flex flex-col mt-[4px]">
          <FontAwesomeIcon icon={faHouse} />
          <SiYoutubeshorts />
          <MdOutlineSubscriptions />
          <SiYoutubemusic />
          <FaUserCircle />
          <LiaDownloadSolid />
        </div>
      </div>
    </>
  );
};
export default SideBar;
