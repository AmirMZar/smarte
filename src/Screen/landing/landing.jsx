import NewsArticles from "../../components/landingComponent/NewsArticles/NewsArticles"
import Header from "../../components/common/Header/Header"
import Podcast from "../../components/landingComponent/Podcast/Podcast"
import Footer from "../../components/common/Footer/Footer"
const Landing = () => {
    return ( <>
        <Header />
        <NewsArticles/>
        <Podcast/>
        <Footer/>
    </> );
}
 
export default Landing;