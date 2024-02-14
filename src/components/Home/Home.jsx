import React from 'react'
import './Home.css'

export default function Home() {
    return (
        <div id='main'>
            <div id="nav">
                <a class="logo" href="https://www.instagram.com/idity_dx/">
                    <h3>@<b>iditya</b>_dx*</h3>
                </a>
                <div id="nav-links">
                    <a class="links" href="https://github.com/idityage" target="_blank"><img src="/src/assets/github.png" alt="" /></a>
                    <a class="links" href="https://discord.gg/Qnt3WCUSXA"><img src="/src/assets/discord.png" alt="" /></a>
                    <a class="links" href="https://www.instagram.com/idity_dx/"><img src="/src/assets/instagram (1).png" alt="" /></a>
                </div>
            </div>
            <div className='top'>
                <p>Passionate Student and Dedicated Coder: Navigating the Intersection of Learning and Programming</p>
                <h1 id='name'>I'm Aditya,
                    <br /> a student & web developer!
                </h1>
            </div>
            <div id="loop">
                <h1><b>&nbsp;&nbsp;IT'S </b>NOT A <b><i><span>BUG;</span></i></b> IT'S AN UNDOCUMENTED
                    <span><i>FEATURE.</i></span></h1>
                <h1><b>&nbsp;&nbsp;IT'S </b>NOT A <b><i><span>BUG;</span></i></b> IT'S AN UNDOCUMENTED
                    <span><i>FEATURE.</i></span></h1>
                <h1><b>&nbsp;&nbsp;IT'S </b>NOT A <b><i><span>BUG;</span></i></b> IT'S AN UNDOCUMENTED
                    <span><i>FEATURE.</i></span></h1>
            </div>

            <div class="shape-motion2">
                <div class="shape12"></div>
            </div>
        </div>
    )
}
