const root = document.querySelector("#root");
console.log("Oke");
function tick() {
  const element = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Jam Sekarang :"), /*#__PURE__*/React.createElement("p", null, new Date().toLocaleTimeString())));
  ReactDOM.render(element, root);
}
tick();
setInterval(() => {
  tick();
}, 1000);