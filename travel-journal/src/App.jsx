import Header from "./Header"
import Cards from "./Cards"
import Footer from "./Footer"
import data from "./data"

function App() {
  const cards = data.map((card) => {
    return (
      <Cards 
        key = {card.id}
        {...card}
      
      />
    )
  })
  return (
    <div>
      <Header />
      <section className="cards-list">
         {cards}
      </section>
      <Footer />
    </div>
  )
}

export default App
