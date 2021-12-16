import { faAward, faBell, faBook, faBullhorn, faCalendarWeek, faCommentDots, faFileDownload, faGraduationCap, faScroll, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <NavLink to="/drmpi-admin/courses" className="sidebarListItem">
              <FontAwesomeIcon className="sidebarIcon" icon={faBook} /> Courses
            </NavLink>
            <NavLink to="/drmpi-admin/notice" className="sidebarListItem" activeClassName="active">
              <FontAwesomeIcon className="sidebarIcon" icon={faBell} /> Notice
            </NavLink>
            <li className="sidebarListItem">
              <FontAwesomeIcon className="sidebarIcon" icon={faAward} /> Results
            </li>
            <li className="sidebarListItem">
              <FontAwesomeIcon className="sidebarIcon" icon={faGraduationCap} /> Scholarship
            </li>
            <li className="sidebarListItem">
              <FontAwesomeIcon className="sidebarIcon" icon={faCalendarWeek} /> Semester
            </li>
            <li className="sidebarListItem">
              <FontAwesomeIcon className="sidebarIcon" icon={faScroll} /> Short Term Program
            </li>
            <li className="sidebarListItem">
              <FontAwesomeIcon className="sidebarIcon" icon={faBullhorn} /> Vaccancy
            </li>
            <li className="sidebarListItem">
              <FontAwesomeIcon className="sidebarIcon" icon={faCommentDots} /> Welcome Message
            </li>
            <li className="sidebarListItem">
              <FontAwesomeIcon className="sidebarIcon" icon={faFileDownload} /> Download
            </li>
            <NavLink to="/drmpi-admin/slider" className="sidebarListItem" activeClassName="active">
              <FontAwesomeIcon className="sidebarIcon" icon={faSlidersH} /> Slider
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
