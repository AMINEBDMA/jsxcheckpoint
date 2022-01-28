import "./App.css";
import myWonderfulImage from "./imageInSrc.jpg"
import myVideo from "./myVideo.mp4"

function App() {
  return (
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="title red">Misfatech Clean Air Solutions </h1>

      <br />

      <img src={myWonderfulImage} alt="imageinsrc" />

      <br />

      <img src="/imageInPublic.jpg" alt="imageinpublic" />

      <div>
        <video width="500" height="400" controls>
          <source src={myVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
