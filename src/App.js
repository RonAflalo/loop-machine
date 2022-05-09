import "./App.css";
import Channel from "./components/Channel/Channel";

function App() {
  function importAll(r) {
    let audios = {};
    r.keys().map((item, index) => {
      console.log(item);
      audios[item.replace("./", "")] = item.replace("./", "./resources/audio/");
    });
    return audios;
  }
  const audios = importAll(
    require.context("./resources/audio/", false, /\.(mp3)$/)
  );

  function createChannelArr(src) {}
  return (
    <div className="App">
      {console.log(audios)}
      {Object.keys(audios).map((title) => (
        <Channel title={title} src={audios[title]}></Channel>
      ))}
    </div>
  );
}

export default App;
