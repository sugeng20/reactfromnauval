const root = document.querySelector("#root");
console.log("Oke");
function tick() {
  const element = /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200,
      height: 200,
      backgroundColor: "blue"
    }
  });
  ReactDOM.render(element, root);
}
tick();
setInterval(() => {
  tick();
}, 1000);