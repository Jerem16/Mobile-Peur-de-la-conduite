import React from "react";

const Home = () => {
    return (
        <div className="nav-icon">
            <svg
                width="18"
                height="18"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 18 18"
            >
                <path
                    d="M8.8,5.3L3,10.1v5.7c0,0.3,0.3,0.5,0.5,0.5H7c0.3,0,0.5-0.3,0.5-0.5v-3.3c0-0.3,0.3-0.5,0.5-0.5h2c0.3,0,0.5,0.3,0.5,0.5
	v3.3c0,0.3,0.3,0.5,0.5,0.5l0,0h3.5c0.3,0,0.5-0.3,0.5-0.5v-5.7l-6-4.8C9.1,5.2,8.9,5.2,8.8,5.3z"
                    className="icon-color"
                />
                <path
                    d="M17.9,8.5l-2.7-2.1V2.1c0-0.3-0.1-0.4-0.4-0.4h-1.7c-0.1,0-0.3,0.1-0.3,0.4v2.3L10,2.1c-0.7-0.5-1.3-0.5-2,0L0.1,8.5
	C0,8.6,0,8.9,0.1,9l0,0l0.8,0.9c0.1,0.1,0.4,0.1,0.5,0l0,0l7.3-6c0.1-0.1,0.4-0.1,0.5,0l7.3,6c0.1,0.1,0.4,0.1,0.5,0l0,0L18,9
	C18,8.9,18,8.6,17.9,8.5L17.9,8.5z"
                    className="icon-color"
                />
            </svg>
        </div>
    );
};
export default React.memo(Home);
