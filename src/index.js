import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/index";
import { Provider } from "react-redux";

// 큰 실수 발견...브라우저 확대율이 80%인 채로 계속 작업했는데, 그걸 깃헙에 커밋하고나서 알았음..
// css 전면 수정 필요함 ㅠㅠ
// 수정된 컴포넌트들은 파일 상단에 표기할 것!

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
