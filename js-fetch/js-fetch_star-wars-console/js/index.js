console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  //console.log(response);

  const data = await response.json();
  //console.log(data.results);
  const allData = data.results;
  const r2d2 = allData.find((element) => element.name === "R2-D2");
  if (r2d2) {
    console.log(r2d2.eye_color);
  }
}

fetchData();
