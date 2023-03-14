import React from "react";
import Alert, { AlertType } from "./components/Alert/alert";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        BUTTON
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
        ALERT
        <Alert
          alertType={AlertType.Danger}
          title={"报错提示"}
          content={"网络错误，请检查网络"}
          closeable
        />
        <Alert
          alertType={AlertType.Default}
          title={"提示"}
          content={"请确认是否进行该操作"}
          closeable
        />
        <Alert
          alertType={AlertType.Warning}
          title={"警告"}
          content={"该操作有风险，请注意"}
        />
        <Alert alertType={AlertType.Success} content={"操作成功"} />
      </header>
    </div>
  );
}

export default App;
