import "./App.css";
import Image from "./Image";

const Heading = ({ name, school, city }) => {
  // console.log(name);
  console.log(name, school, city);
  return (
    <h1>{` HELLO ${name} ${school} ${city}
     `}</h1>
  );
};

function App() {
  return (
    <div>
      <Heading name="Prakhar" school="Amity" city="Patna" />
      <Heading name="Nupur" school="BITS" city="Bihta" />
      <p>Hi</p>
      {/* <img
        src="https://images.unsplash.com/photo-1530636041143-c07787be24e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1653&q=80"
        alt=""
      /> */}
      {/* <img src={X} alt="" />
      <img className="image-2" src={X} alt="" /> */}
      <Image />
    </div>
  );
}

export default App;
