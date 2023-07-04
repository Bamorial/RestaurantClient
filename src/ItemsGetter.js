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
    id: "11",
    price: "22",
    description: "i dunno ",
    quantity: "1",

    image: "ids312hfos",
  },
  {
    name: "Pizza",
    id: "11",
    price: "22",
    description: "hello world",
    quantity: "1",

    image: "ids312hfos",
  },
  {
    name: "Pizza but better",
    id: "12",
    price: "22",
    description: "hello world x2",
    quantity: "1",

    image: "ids312hfos",
  },
];
const Pizza = [
  {
    name: "pizza",
    id: "1",
    price: "25",
    description: "onionzzzzz, bunzzz",
    quantity: "1",

    image: "idshfos",
  },
  {
    name: "pizza",
    id: "11",
    price: "22",
    description: "i dunno ",
    quantity: "1",

    image: "ids312hfos",
  },
  {
    name: "Pizza",
    id: "11",
    price: "22",
    description: "hello world",
    quantity: "1",

    image: "ids312hfos",
  },
  {
    name: "Pizza but better",
    id: "12",
    price: "22",
    description: "hello world x2",
    quantity: "1",

    image: "ids312hfos",
  },
];
function GetItems(category) {
  if (category === "Pizza") return Pizza;
  if (category === "Burger") return Burgers;
}
export default GetItems;
