import React from "react";
import Alert, { AlertType } from "./components/Alert/alert";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
import Menu, { MenuMode } from "./components/Menu/menu";
function App() {
  const items = [
    {
      label: "首页",
      key: "home",
    },
    {
      label: "新闻",
      key: "news",
      children: [
        {
          label: "党建新闻",
          key: "party",
        },
        {
          label: "园区新闻",
          key: "yuanqu",
        },
      ],
    },
    {
      label: "个人中心",
      key: "center",
      disabled: true,
    },
  ];
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
        <div>222</div>
        <Alert alertType={AlertType.Default} title={"提示"} />
        <Alert
          alertType={AlertType.Warning}
          title={"警告"}
          content={
            "该操作有风险，请注意,该操作有风险，请注意,该操作有风险，请注意该操作有风险，请注意,,该操作有风险，请注意该操作有风险，请注意该操作有风险，请注意"
          }
        />
        <Alert alertType={AlertType.Success} content={"操作成功"} />
        <Menu items={items} mode={MenuMode.Horizontal} />
        <div style={{ height: "100px" }}></div>
        <Menu items={items} mode={MenuMode.Vertical} />
      </header>
    </div>
  );
}

export default App;
