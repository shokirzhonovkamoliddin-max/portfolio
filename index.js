const request = new XMLHttpRequest();
const api = "https://jsonplaceholder.typicode.com/todos";
const loading = document.querySelector(".loading");
const list = document.querySelector(".list");

request.addEventListener("readystatechange", () => {
  if (request.readyState < 4) {
    loading.innerHTML = "LOADING ......";
  }
  if (request.status === 200 && request.readyState === 4) {
    const data = JSON.parse(request.responseText);
    showData(data);
    loading.innerHTML = "";
  }
});

request.open("GET", api);
request.send();

function showData(data) {
  list.innerHTML = "";
  if (data && data.length > 0) {
    data.forEach((element) => {
      list.innerHTML += `<div class="item">
          <p> id : ${element.id} </p>
          <h3>title : ${element.title} </h3>
          <p> completed : ${element.completed} </p>
        </div>`;
    });
  } else {
    console.log("data yo'q");
  }
}
