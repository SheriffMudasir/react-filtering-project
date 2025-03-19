import React, { useState } from 'react'
import Navigation from './Navigation/Navigation'
import Products from "./Products/Products"
import Reccommendation from './Reccommendation/Reccommendation'
import products from "./db/data"
import Sidebar from './Sidebar/Sidebar'
import Card from './components/Card'


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");


  // INPUT FILTER
  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }
  const filteredItem = products.filter((product) => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1)


  // RADIO FILTER

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  } 


  // BUTTON FILTER
  const handleClick = ( event) => {
    setSelectedCategory(event.target.value)
  }


  function filteredData (products, selected, query) {
    let filteredProducts = products;

    if (query) filteredProducts = filteredItem;

    if (selected){
      filteredProducts = filteredProducts.filter(
        ({category, color, company, newPrice, title }) => 
      category === selected ||
      color === selected ||
      company === selected ||
      newPrice === selected ||
      title === selected 
)
    }

    return filteredProducts.map(({img, title, reviews, prevPrice, newPrice}) => {
      return <Card key={Math.random()} img={img} 
          title={title}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
      />
    })

  }
  const result = filteredData(products, selectedCategory, query);

  return (
    <>
    <Sidebar handleChange = {handleChange}/>
    <Navigation query={query} handleInputChange={handleInputChange} />
    <Reccommendation handleClick={handleClick} />
    <Products result={result}/>
    </>
  )
}

export default App
