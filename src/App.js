import "./App.css";

function App() {
  return (
    <div className="App">
      <html>
        <head>
          <link rel="stylesheet" href="styles.css" />
        </head>
        <body>
          <div class="navbar" id="navbar">
            <ul>
              <a href="#welcome-section">Welcome</a>
              <a href="#projects">Projects</a>
              <a href="#profile-link">Profile</a>
            </ul>
          </div>
          <div class="welcome-section" id="welcome-section">
            <h1>Welcome, My name is Wincent</h1>
          </div>

          <div class="projects" id="projects">
            <div class="project-tile">
              <img src="./tribute.png" alt="image of tribute for Kobe Bryant" />
              <a href="https://codepen.io/mrpandemonium/pen/oNadeNO">
                Tribute Page
              </a>
            </div>
            <div class="project-tile">
              <img src="./ferriswheel.png" alt="preview of ferris wheel" />
              <a href="https://codepen.io/mrpandemonium/pen/GRYdLvo">
                Ferris Wheel
              </a>
            </div>
            <div class="project-tile">
              <img src="./survey.png" alt="image of survey" />
              <a href="https://codepen.io/mrpandemonium/pen/gOBzxOa">Survey</a>
            </div>
          </div>
          <div class="profile-link">
            <h1>Here is my profile!</h1>
            <a href="https://github.com/mrpandemonium" id="profile-link">
              Github
            </a>
          </div>
        </body>
      </html>
    </div>
  );
}

export default App;
