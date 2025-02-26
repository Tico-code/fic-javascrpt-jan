import ImgCard from "./Components/imgCard";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import img1 from "./assets/img-1.jpg";
import img2 from "./assets/img-2.jpg";
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
    
    < ImgCard caption= "uma imagem legal" newImg= {img1}/>
    < ImgCard caption= "uma imagem legal" newImg= {img2}/>
    
     </div>
    </>
  )
}

export default App
