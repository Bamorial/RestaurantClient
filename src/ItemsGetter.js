import axios from "axios";
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

const Burgers = [
  {
    name: "Burger",
    id: "1",
    price: "25",
    description: "onionzzzzz, bunzzz",
    quantity: "1",
    image: "idshfos",
  },
  {
    name: "Club Sandwich",
    id: "2",
    price: "22",
    description: "i dunno ",
    quantity: "1",

    image: "ids312hfos",
  },
  {
    name: "Pizza",
    id: "3",
    price: "22",
    description: "hello world",
    quantity: "1",

    image: "ids312hfos",
  },
  {
    name: "Pizza but better",
    id: "4",
    price: "22",
    description: "hello world x2",
    quantity: "1",

    image: "ids312hfos",
  },
];
const Pizza = [
  {
    name: "pizza",
    id: "5",
    price: "25",
    description: "onionzzzzz, bunzzz",
    quantity: "1",

    image: "idshfos",
  },
  {
    name: "pizza",
    id: "6",
    price: "22",
    description: "i dunno ",
    quantity: "1",

    image: "ids312hfos",
  },
  {
    name: "Pizza",
    id: "7",
    price: "22",
    description: "hello world",
    quantity: "1",

    image: "ids312hfos",
  },
  {
    name: "Pizza but better",
    id: "8",
    price: "22",
    description: "hello world x2",
    quantity: "1",

    image: "ids312hfos",
  },
];

export default getAll;
