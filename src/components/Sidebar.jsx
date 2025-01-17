import React, { useEffect,useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
const navigate = useNavigate();
function gotoFishfarm(){
    navigate('/fishfarm');
};
    return (
        <div id="layoutSidenav_nav">
            <nav className="sidenav shadow-right sidenav-light">
                <div className="sidenav-menu">
                    <div className="nav accordion" id="accordionSidenav">
                        {/* Sidenav Menu Heading (Account)*/}
                        {/* * * Note: * * Visible only on and above the sm breakpoint*/}
                        <div className="sidenav-menu-heading d-sm-none">Account</div>
                        {/* Sidenav Link (Alerts)*/}
                        {/* * * Note: * * Visible only on and above the sm breakpoint*/}
                        <a className="nav-link d-sm-none" href="#!">
                            <div className="nav-link-icon">
                                <i data-feather="bell" />
                            </div>
                            Alerts
                            <span className="badge bg-warning-soft text-warning ms-auto">
                                4 New!
                            </span>
                        </a>
                        {/* Sidenav Link (Messages)*/}
                        {/* * * Note: * * Visible only on and above the sm breakpoint*/}
                        <a className="nav-link d-sm-none" href="#!">
                            <div className="nav-link-icon">
                                <i data-feather="mail" />
                            </div>
                            Messages
                            <span className="badge bg-success-soft text-success ms-auto">
                                2 New!
                            </span>
                        </a>


                        {/* Sidenav Menu Heading (Core)*/}
                        <div className="sidenav-menu-heading">관리자 페이지</div>
                        {/* Sidenav Accordion (Dashboard)*/}
                        <a
                            className="nav-link collapsed"
                            href="#"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseDashboards"
                            aria-expanded="false"
                            aria-controls="collapseDashboards"
                        >
                            <div className="nav-link-icon">
                                <i data-feather="activity"/>
                            </div>
                            양식장
                            <div className="sidenav-collapse-arrow">
                                <i className="fas fa-angle-down" />
                            </div>
                        </a>
                        <div
                            className="collapse"
                            id="collapseDashboards"
                            data-bs-parent="#accordionSidenav"
                        >
                            <nav
                                className="sidenav-menu-nested nav accordion"
                                id="accordionSidenavPages"
                            >
                                <a className="nav-link" href="dashboard-1.html">
                                    완도 가교
                                    <span className="badge bg-primary-soft text-primary ms-auto">
                                    </span>
                                </a>
                            </nav>

                        </div>
                        {/* {data2.map(function(a){
                            return(
                            <a
                            key={a.id}
                            className="nav-link collapsed"
                            href="#"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseDashboards"
                            aria-expanded="false"
                            aria-controls="collapseDashboards"
                        >
                            <div className="nav-link-icon">
                                <i data-feather="activity"/>
                            </div>
                            {props.title}
                            <div className="sidenav-collapse-arrow">
                                <i className="fas fa-angle-down" />
                            </div>
                            </a>

                            )})
                        } */}
                        {/* 양식장 추가 버튼*/}
                        <div className="mx-auto my-2 py-2 px-3">
                            <div
                                className="btn btn-transparent-dark"
                                style={{
                                paddingTop: '0.5rem',
                                paddingBottom: '0.5rem',
                                paddingLeft: '2rem',
                                 paddingRight: '2rem',
                                }}> 
                                새 양식장 추가</div>
                            <button 
                                onClick={gotoFishfarm}
                                className="btn btn-transparent-dark"
                                style={{paddingTop: '0.5rem',paddingBottom: '0.5rem',}}>
                                +
                            </button>
                        </div>
                        {/* Sidenav Heading (Custom)*/}
                    </div>
                </div>
                {/* Sidenav Footer*/}
                <div className="sidenav-footer">
                    <div className="sidenav-footer-content">
                        <div className="sidenav-footer-subtitle">Logged in as:</div>
                        <div className="sidenav-footer-title">team Focus</div>
                    </div>
                </div>
            </nav>
        </div>
  )
}


export default Sidebar;