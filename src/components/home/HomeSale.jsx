import { useContext } from 'react'
import { Link } from 'react-router-dom'
import HomeSaleAd from '../home/HomeSaleAd'
import HomeSaleProduct from './HomeSaleProduct'
import { ProductContext } from '../../contexts/ProductContext'

const HomeSale = () => {

  const { data } = useContext(ProductContext)

  return (
      <div className='sale-container'>
        <div className='grid-sale-template'>
          { // Ta bort en HomeSaleAd
            // Mappa istället ut de båda och flytta runt de med grid areas
            // TBD - rendera ut produkter som är på REA. Vilken lösning är smartast?
            // Uppdatera produkten med "onSale" i db?
            // Byta ut "price" till originalPrice och en till kategori för "reducedPrice"?
          }
          <HomeSaleAd />
          {
          data.map(card => (
            <Link to={`/productdetails/`} key={card._id}>
              <HomeSaleProduct card={card} key={card._id} />
            </Link>
          ))
        }
        </div>
      </div>
  )
}

export default HomeSale