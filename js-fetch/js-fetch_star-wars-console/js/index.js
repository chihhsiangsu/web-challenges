console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  //console.log(response);

  const data = await response.json();
  //console.log(data.results);
  return data.results;
}
async function findR2d2Eyecolor() {
  const allData = await fetchData();
  const r2d2 = allData.find((feacher) => feacher.name === "R2-D2");
  if (r2d2) {
    console.log(r2d2.eye_color);
  }
}

findR2d2Eyecolor();
fetchData();
