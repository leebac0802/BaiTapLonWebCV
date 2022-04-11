import { useState } from "react";
import "./App.css";
import Header from "./container/Header";
import Navication from "./container/Navication";
import Content from "./container/Content";
import Contain3 from "./container/Contain3";
function App() {
  const [sectionCurrent, setSectionCurrent] = useState(0);
  return (
    <div className="App">
      <div className="header">
        <Header></Header>
      </div>
      <div className="body">
        <div className="nav">
          <Navication setSectionCurrent={setSectionCurrent} />
        </div>
        <div className="contain-main">
          {sectionCurrent === 0 ? (
            <Content></Content>
          ) : sectionCurrent === 1 ? (
            <Content>contain2</Content>
          ) : sectionCurrent === 2 ? (
            <Content>
              <Contain3></Contain3>
            </Content>
          ) : sectionCurrent === 3 ? (
            <Content>contain4</Content>
          ) : (
            <Content>contain5</Content>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
