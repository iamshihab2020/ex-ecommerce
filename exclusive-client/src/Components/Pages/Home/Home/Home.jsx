import FlashSales from "../FlashSales/FlashSales"
import Hero from "../Hero/Hero"

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="px-8 lg:px-14 mt-20"> 
      <FlashSales/>
      </div>
    </div>
  )
}

export default Home