const content = document.getElementById("quote");
const author = document.getElementById("author");

let url = "https://api.quotable.io/random";
async function getData() {
    const response = await fetch(url);
    const data = await response.json();

    let quote = data.content;
    let writer = data.author;

    content.textContent = '" ' + quote + ' "';
    author.textContent = writer;
}

getData();
