import Carousel from "../components/Carousel.jsx"
import FeaturedProducts from "../components/FeaturesProducts.jsx"
import Categories from "../components/Categories.jsx"

function Home(){
    return(
        <>
        <Carousel></Carousel>
        <FeaturedProducts></FeaturedProducts>
        <Categories></Categories>
        </>
    )
}

export default Home