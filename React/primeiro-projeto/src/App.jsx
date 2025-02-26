import Header from "./Components/Header";
import Banner from "./Components/Banner";
import imgCard from "./Components/imgCard";
import "./App.css";



function App() {
 

  return (
    <>
     <div className="container">
      <Header title= "Logo New" />


    <Banner>
      <h1>Welcome to my site</h1>
      <p> Here you can find the bestest offerts</p>
    </Banner>
    
    < imgCard/>
    
     </div>
    </>
  )
}

export default App
