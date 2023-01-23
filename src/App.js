import "./App.css";
import Content from "./components/Content"
import Footer from "./components/Footer";
import Emoticon from "./components/Emoticon"

const App = () => {
  return (
    <div className="App">
      <Content />
      <Emoticon />
      <Footer />
    </div>
  );
}

export default App;
