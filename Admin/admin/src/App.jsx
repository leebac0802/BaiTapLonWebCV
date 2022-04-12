import { useState } from "react";
import "./App.css";
import Header from "./container/Header";
import Navication from "./container/Navication";
import Content from "./container/Content";
import Contain3 from "./container/Contain3";
import Contain4 from "./container/Contain4";
import Contain5 from "./container/Contain5";
import Create2 from "./components/Create2";
import Contain1 from "./container/Contain1";
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
            <Content>
              <Contain1></Contain1>
            </Content>
          ) : sectionCurrent === 1 ? (
            <Content>contain2</Content>
          ) : sectionCurrent === 2 ? (
            <Content>
              <Contain3></Contain3>
            </Content>
          ) : sectionCurrent === 3 ? (
            <Content>
              <Contain4></Contain4>
            </Content>
          ) : (
            <Content>
              <Contain5></Contain5>
            </Content>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
