import ImgCard from "./Components/imgCard";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
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
    
    < ImgCard caption= "uma imagem legal"/>
     </div>
    </>
  )
}

export default App
