const root = document.querySelector("#root");
function padaSaatAkuDiklik(msg) {
  alert(msg);
}
const element = /*#__PURE__*/React.createElement("button", {
  onClick: padaSaatAkuDiklik.bind(this, "Helo nama sya sugeng")
}, "Click Me");
ReactDOM.render(element, root);