import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <div className="about-section">
        <h1>About Us</h1>
        <p>we are the developer of this webiste.</p>
      </div>

      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src="#" alt="Kheyre" style={{ width: "100%" }} />
            <div className="container">
              <h2>Abdirashid Kheyre</h2>
              <p>akheyrem@gmail.com.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="Najma image" alt="Najma" style={{ width: "100%" }} />
            <div className="container">
              <h2>Najmo Nour Abid</h2>
              <p>najka@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="#" alt="Anisa" style={{ width: "100%" }} />
            <div className="container">
              <h2>Anisa</h2>
              <p>Anisa@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="#" alt="AK" style={{ width: "100%" }} />
            <div className="container">
              <h2>Abdirzaq Ahmed isse</h2>
              <p>Ak@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="#" alt="Saaji" style={{ width: "100%" }} />
            <div className="container">
              <h2>Saaji</h2>
              <p>Saaji@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="#" alt="Farzamo" style={{ width: "100%" }} />
            <div className="container">
              <h2>AbdiHakin Nour Abdulahi</h2>
              <p>farzamo@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        {/* one more person  */}
      </div>
    </div>
  );
}

export default About;
