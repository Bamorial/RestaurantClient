import axios from "axios";

const food = {
  Burger: "2",
  Bauturi: "1",
};

async function getAll() {
  let items;
  const response = await axios
    .get("http://127.0.0.1:8000/api/produse")
    .then((response) => {
      console.log(response.data.produse);
      items = response.data.produse;
    });

  return items;
}

async function GetCathegory(id) {
  let items = await getAll();
  let Food = [];
  console.log(items);
  for (let item of items) {
    if (item.tipProdus == food[id]) {
      Food.push(item);
      console.log(item);
    }
  }
  return Food;
}

export default GetCathegory;
