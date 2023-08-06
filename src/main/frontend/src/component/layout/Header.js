import React from "react";

function Header(props) {
    return (
        <div className="header">
            <div className="header">
                <h3>
                    <label>
                        <span className="las la-bars"></span>
                    </label>
                    Dashboard
                </h3>
                <div className="header-timeout">
                    <p>남은 시간 09:59</p>
                    <button>
                        <i className="las la-history"></i>
                        연장하기
                    </button>
                </div>
                <div className="user-wrapper">
                    <i className=""></i>
                    <div className="user-wrapper-text">
                        <h4>홍길동</h4>
                        <small>전체 관리자</small>
                    </div>
                </div>
                <div className="user-logout">
                    <a href="#">
                        <span className="las la-power-off">

                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Header;