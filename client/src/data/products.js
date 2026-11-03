import watch from "../assets/images/shopping.webp";
import handbag from "../assets/images/handbag.jpg";
import shoes from "../assets/images/shoes.webp";
import dress from "../assets/images/dress.webp";

const products = [
  {
    id: 1,
    name: "Royal Gold Watch",
    category: "Watches",
    price: 7999,
    discount: "20% OFF",
    rating: 5,
    image: watch,
  },
  {
    id: 2,
    name: "Luxury Leather Handbag",
    category: "Handbags",
    price: 4999,
    discount: "15% OFF",
    rating: 4,
    image: handbag,
  },
  {
    id: 3,
    name: "Premium White Sneakers",
    category: "Shoes",
    price: 3999,
    discount: "10% OFF",
    rating: 5,
    image: shoes,
  },
  {
    id: 4,
    name: "Elegant Designer Dress",
    category: "Fashion",
    price: 5999,
    discount: "25% OFF",
    rating: 4,
    image: dress,
  },
];

export default products;