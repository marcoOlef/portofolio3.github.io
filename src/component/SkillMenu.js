import React from "react";
import './style/Skill.css';

function SkillMenu() {
    return (
        <div id="menu">
            <ul className="skill-menu">
                <li><a href="#Home">Data Science</a></li>
                <li><a href="#Home">Cyber Security</a></li>
                <li><a href="#Home">Web Developer</a></li>
                <li><a href="#Home">Blockchain</a></li>
            </ul>
        </div>
    )
}

export default SkillMenu;