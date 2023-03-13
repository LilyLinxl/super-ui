import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          size={ButtonSize.Large}
          onClick={(e) => {
            console.log(e);
          }}
          href={"www.baidu.com"}
        >
          add info
        </Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com">
          edit info
        </Button>
        <Button btnType={ButtonType.Primary}>edit info</Button>
        <Button btnType={ButtonType.Danger}>edit info</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          edit info
        </Button>
        <Button
          btnType={ButtonType.Link}
          href="www.baidu.com"
          onClick={() => {}}
        >
          edit info
        </Button>
      </header>
    </div>
  );
}

export default App;
