const root = document.querySelector("#root");

function padaSaatAkuDiklik(msg) {
  alert(msg);
}

const element = (
  <button onClick={padaSaatAkuDiklik.bind(this, "Helo nama sya sugeng")}>
    Click Me
  </button>
);

ReactDOM.render(element, root);
