const root = document.querySelector("#root");

console.log("Oke");

function tick() {
  const element = (
    <div
      style={{
        width: 200,
        height: 200,
        backgroundColor: "blue",
      }}
    ></div>
  );
  ReactDOM.render(element, root);
}

tick();

setInterval(() => {
  tick();
}, 1000);
