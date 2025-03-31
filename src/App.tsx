import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MovieSection from "./Components/MovieSection/MovieSection";
import Newsletter from "./Components/Newsletter/Newsletter";


function App() {

  return (
    <>
      <Header />
      <Banner src="./Imagens/Banner_Desktop_Texto.png" />
      <MovieSection />
      <Banner src="./Imagens/Banner Combo Desktop.png" />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
