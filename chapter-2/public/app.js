const root = document.querySelector("#root");
console.log("Oke");
function tick() {
  const className = "box";
  const element = /*#__PURE__*/React.createElement("div", {
    className: className
  });
  ReactDOM.render(element, root);
}
tick();
setInterval(() => {
  tick();
}, 1000);