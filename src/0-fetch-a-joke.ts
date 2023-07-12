import fetch from "node-fetch";

function demoFetchWithThen() {
  fetch("https://jokestemp.neillbogie.repl.co/jokes/general/random")
    .then((res) => res.json())
    .then((res) => console.log(res));
}

async function demoFetchWithAwait() {
  const response = await fetch(
    "https://api.kanye.rest/"
  );
  const jsonBody = await response.json();
  console.log(jsonBody);
}

// demoFetchWithThen();
demoFetchWithAwait();
