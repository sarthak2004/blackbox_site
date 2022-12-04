import React from 'react'
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <>
    <div class="about-section">
        <h1>About Us</h1>
        </div>

        <h2 style={{textAlign:'center'}}>Our Team</h2>
        <div class="row">
        <div class="column">
            <div class="card">
            <div class="container">
                <h2>Chetan</h2>
                <p class="title">Core Developer</p>
                <p>Undergrad @ IIIT-D</p>
                {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                <p>chetan.jul31@gmail.com</p>
                {/* <p><button class="button" href="\in\chetan-2b6ab3211\">Contact</button></p> */}
            </div>
            </div>
        </div>

        <div class="column">
            <div class="card">
            <div class="container">
                <h2>Sarthak Sharma</h2>
                <p class="title">Core Developer</p>
                <p>Undergrad @ NSUT</p>
                <p>srathak062004@gmail.com</p>
                {/* <p><button class="button">Contact</button></p> */}
            </div>
            </div>
        </div>

        <div class="column">
            <div class="card">
            <div class="container">
                <h2>Piyush Sinha</h2>
                <p class="title">Core Developer</p>
                <p>Undergrad @ NSUT</p>
                {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                <p>piushsinha19807@gmail.com</p>
                {/* <p><button class="button" href="">Contact</button></p> */}
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default AboutUs