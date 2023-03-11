import React, { useState } from "react";
import "./SideNavBar.css";
import {  PersonFill, GearFill, EnvelopeFill, LockFill, PieChartFill, PersonFillAdd, Translate, PersonVcard} from 'react-bootstrap-icons';

import { Link, NavLink } from "react-router-dom";
const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	return (
		<div id="navv"
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand top-nav">
                            <Link className="d-flex flex-column w-100 zi px-2 py-4 navbar_top ps-5" to="/">
                  <PersonVcard className="fs-2 text-white ms-2" />  <span className="fs-6 text-white user ms-2"> User Management </span>
        </Link>	
						</div>
					)}
					<button id="arrow"
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
                <ul className="navbar-nav   d-flex flex-column ">
            <li className="nav-item">
              {isExpanded ? (
                <NavLink className="nav-link navlink" exact to="/">
                  <PersonFill className="icons-exp"/> <span> Users </span>{" "}
                </NavLink>
              ) : (
                <Link className="nav-link ps-4 fs-4" exact to="/">
                  <PersonFill classname="in-icon"/>
                </Link>
              )}

              {isExpanded && (
                <Link className="btn btn-outline-light btn-sm addBtn navlink" to="/add-user">
                  <PersonFillAdd className="icons-exp"/> Add User
                </Link>
              )}
            </li>

            <li className="nav-item">
              {isExpanded ? (
                <NavLink className="nav-link navlink" exact to="/">
                  <PieChartFill className="icons-exp" /> <span> Dashboard </span>
                </NavLink>
              ) : (
                <Link className="nav-link ps-4 fs-4" exact to="/">
                  <PieChartFill classname="in-icon"/>
                </Link>
              )}
            </li>
            <li className="nav-item">
              {isExpanded ? (
                <NavLink className="nav-link navlink" to="/contact">
                  <EnvelopeFill className="icons-exp"/> <span> Messages </span>
                </NavLink>
              ) : (
                <Link className="nav-link ps-4 fs-4" to="/contact">
                  <EnvelopeFill classname="in-icon"/>
                </Link>
              )}
            </li>
            <li className="nav-item">
              {isExpanded ? (
                <NavLink className="nav-link navlink" to="/">
                  <LockFill className="icons-exp"/> <span> Roles & Permissions </span>
                </NavLink>
              ) : (
                <Link className="nav-link ps-4 fs-4" to="/">
                  <LockFill classname="in-icon"/>
                </Link>
              )}
            </li>
            <li className="nav-item">
              {isExpanded ? (
                <NavLink className="nav-link navlink" to="/">
                  <Translate className="icons-exp"/> <span> Languages </span>
                </NavLink>
              ) : (
                <Link className="nav-link ps-4 fs-4" to="/">
                  <Translate classname="in-icon"/>
                </Link>
              )}
              
            </li>
            <li className="nav-item">
              {isExpanded ? (
                <NavLink className="nav-link navlink" to="/">
                  <GearFill className="icons-exp"/> <span> Settings </span>
                </NavLink>
              ) : (
                <Link className="nav-link ps-4 fs-4" to="/">
                  <GearFill classname="in-icon"/>
                </Link>
              )}
              
            </li>
            </ul>
				</div>
			</div>
			{/* <div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src="icons/admin-avatar.svg"
							alt=""
							srcset=""
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">M Showkat</p>
							<p className="nav-footer-user-position">store admin</p>
						</div>
					</div>
				)}
				<img className="logout-icon" src="icons/logout.svg" alt="" srcset="" />
			</div> */}
		</div>
	);
};

export default SideNavBar;