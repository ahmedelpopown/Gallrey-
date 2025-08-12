 import image from "../../public/images/mana3.png"
import CounterSection from "../components/CounterSection"
const About = () => {
  return (
<>
    
  <div className="w-[50%] relative justify-center flex overflow-hidden">
 <div className="bg-gradient-to-br from-yellow-400 to-green-500 rounded-full w-[25rem] h-[25rem] flex justify-center overflow-hidden">
  <img
    src={image}
    alt=""
    className="object-cover"
  />
</div>
</div>
      <span className="w-[50%] ">
        <CounterSection/>
        <h1>First Name, Last Name</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident adipisci ratione atque voluptatum nobis voluptatibus ex soluta qui possimus iste accusamus eaque, tempore ea quibusdam esse. Minima explicabo sunt rerum.</p>
      </span>

</>
    
  )
}

export default About
