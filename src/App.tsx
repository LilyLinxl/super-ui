import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button size={ButtonSize.Large} disabled>
          22
        </Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com">
          33
        </Button>
      </header>
    </div>
  );
}

export default App;
