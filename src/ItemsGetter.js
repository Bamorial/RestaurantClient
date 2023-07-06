import axios from "axios";

async function GetAll() {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/produse");

    const data = response.data;

    return data;
  } catch (error) {
    console.error("err", error);
    return [];
  }
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
async function GetItems(category) {
  const produse = await GetAll();

  if (category === "Pizza") return Pizza;
  if (category === "Burger") return Burgers;
}
export default GetItems;
