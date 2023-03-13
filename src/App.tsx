import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button size={ButtonSize.Large} disabled>
          add info
        </Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com">
          edit info
        </Button>
      </header>
    </div>
  );
}

export default App;
