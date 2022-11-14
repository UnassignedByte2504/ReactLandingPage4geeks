import React from 'react'

function NavBar() {
  return (
    <div className="navbar bg-light container shadow-sm">
    <div className="navbrand nav-item BrandContainer">
        <div className="LogoContainer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
                    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
                    <g stroke="#61dafb" stroke-width="1" fill="none">
                        <ellipse rx="11" ry="4.2"/>
                        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                    </g>
                </svg>
        </div>
        <span className="ReactTitle shadow-sm">React Landing Page</span>
    </div>
</div>
  )
}

export default NavBar