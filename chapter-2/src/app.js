const root = document.querySelector("#root");

console.log("Oke");

function tick() {
  const element = (
    <>
      <div>
        <h1>Jam Sekarang :</h1>
        <p>{new Date().toLocaleTimeString()}</p>
      </div>
    </>
  );
  ReactDOM.render(element, root);
}

tick();

setInterval(() => {
  tick();
}, 1000);
