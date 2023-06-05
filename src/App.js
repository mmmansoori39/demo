// import logo from './logo.svg';
import './App.css';
import Card from './Components/CardComponents'
const restaurants = [
  {
    name: "Biryani",
    desc: "Delicious, fresh and healthy food.",
    rating: 4.5,
    voting: 100,
    price: 1000,
    reviews: [
      { reviewer: "John Doe", comment: "Great food and service!" },
      { reviewer: "Jane Doe", comment: "I loved it! Highly recommend." }
    ]
  },
  {
    name: "Foodie's Delight",
    desc: "A perfect spot for food lovers.",
    rating: 4.0,
    voting: 50,
    price: 1500,
    reviews: [
      { reviewer: "Sarah", comment: "I really enjoyed the food here." },
      { reviewer: "Mike", comment: "Good value for money." }
    ]
  },
  {
    name: "Spicy Noodle",
    desc: "A taste of Asia in every bite.",
    rating: 4.3,
    voting: 80,
    price: 700,
    reviews: [
      { reviewer: "James", comment: "Awesome noodle dishes." },
      { reviewer: "Emily", comment: "The broth was amazing!" }
    ]
  },
  {
    name: "Burger",
    desc: "Gourmet burgers made with love.",
    rating: 4.6,
    voting: 120,
    price: 600,
    reviews: [
      { reviewer: "Chris", comment: "The best burgers in town." },
      { reviewer: "Sophia", comment: "I love the toppings." }
    ]
  },
  {
    name: "Pizza",
    desc: "Hot, fresh and cheesy pizzas.",
    rating: 4.2,
    voting: 90,
    price: 800,
    reviews: [
      { reviewer: "Olivia", comment: "Perfectly baked crust." },
      { reviewer: "Daniel", comment: "Great toppings selection." }
    ]
  },
  {
    name: "Seafood Sensations",
    desc: "Fresh seafood and great views.",
    rating: 4.8,
    voting: 150,
    price: 1700,
    reviews: [
      { reviewer: "Emma", comment: "Best seafood I've ever had." },
      { reviewer: "Noah", comment: "Highly recommend the lobster." }
    ]
  },
  {
    name: "Mexican Madness",
    desc: "Authentic Mexican cuisine.",
    rating: 4.1,
    voting: 75,
    price: 1000,
    reviews: [
      { reviewer: "Ava", comment: "Awesome tacos and guac." },
      { reviewer: "Liam", comment: "I love the spicy salsa." }
    ]
  },
  {
    name: "Veggie Delight",
    desc: "Healthy and delicious vegetarian options.",
    rating: 4.4,
    voting: 95,
    price: 900,
    reviews: [
      { reviewer: "Isabella", comment: "Best veggie burger ever." },
      { reviewer: "William", comment: "I love the quinoa salad." }
    ]
  },
  {
    name: "Sweet Treats",
    desc: "Indulge in delicious desserts.",
    rating: 4.7,
    voting: 130,
    price: 400,
    reviews: [
      { reviewer: "Mia", comment: "The best ice cream in town." },
      { reviewer: "Alexander", comment: "Awesome variety of cakes." }
    ]
  },
  {
    name: "Sushi Supreme",
    desc: "Fresh and authentic sushi.",
    rating: 4.5,
    voting: 100,
    price: 1500,
    reviews: [
      { reviewer: "Sofia", comment: "Excellent sashimi." },
      { reviewer: "Michael", comment: "Love the hand rolls." }
    ]
  }

];


function App() {
  return (
    <div className='box'>
      {
        restaurants.map((item)=>{
          return(
            <Card name={item.name} desc={item.desc} price={item.price} rating={item.rating}></Card>
          )
        })
      }
    </div>
  )
}

export default App;
