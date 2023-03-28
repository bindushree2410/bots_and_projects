import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header>
        <div className="header-text">
          <h1>Bots And Projects</h1>
        </div>
      </header>
      <main>
        <div className="robot-gallery">
          <div className="robot">
            <img src="lfr.jpeg" alt="Line Following Bot" />
            <h3> Line following Bot</h3>
            <div className="description">
              <p className="heading"> Line Following Bot</p>
              <br />
              <p className="fonts">
                This is a Line Following Robot that can follow a black line on
                a white surface. It uses infrared sensors to detect the line and
                a microcontroller to control the motors.
              </p>
            </div>
          </div>
          <div className="robot">
            <img src="Obs.jpeg" alt="Obstacle Avoiding Bot" />
            <h3> Table Top</h3>
            <div className="description">
              <p className="heading">Table Top Bot </p>
              <br />
              <p className="fonts">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Odit, animi expedita maiores impedit sunt quo illo ea corporis,
                tempore sapiente in aperiam consectetur perspiciatis aut!
              </p>
            </div>
          </div>
          <div className="robot">
            <img
              src="Obstacle Avoiding-Robot-using-Arduino-and-Ultrasonic-Sensor.jpg"
              alt="Obstacle Avoiding Bot"
            />
            <h3> Obstacle Avoiding Bot</h3>
            <div className="description">
              <p className="heading">Obstacle Avoiding Bot </p>
              <br />
              <p className="fonts">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Odit, animi expedita maiores impedit sunt quo illo ea corporis,
                tempore sapiente in aperiam consectetur perspiciatis aut!
              </p>
            </div>
          </div>
          <div className="robot">
            <img src="bluetooth.jpg" alt="bluetooth Bot" />
            <h3> bluetooth Controlled Bot</h3>
            <div className="description">
              <p className="heading">Bluetooth Controlled Bot</p>
              <br />
              <p className="fonts">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Odit, animi expedita maiores impedit sunt quo illo ea corporis,
                tempore sapiente in aperiam consectetur perspiciatis aut!
              </p>
            </div>
          </div>
          <div className="robot">
            <img src="..." alt="..." />
            <h3>Bot Name</h3>
            <div className="description">
              <p className="heading">Bot Name</p>
              <br />
              <p className="fonts">
                Bot description.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
