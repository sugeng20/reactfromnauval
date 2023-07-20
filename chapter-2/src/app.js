const root = document.querySelector("#root");

console.log("Oke");

function tick() {
  const className = "box";
  const element = <div className={className}></div>;
  ReactDOM.render(element, root);
}

tick();

setInterval(() => {
  tick();
}, 1000);
