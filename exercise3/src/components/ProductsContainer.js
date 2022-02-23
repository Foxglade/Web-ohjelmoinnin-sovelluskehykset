import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

export default function ProductsContainer(props) {

    const ratings = (props) => {
        var arr = [];
        for(let i = props.type=='' ? -1 : 0; i < props.rating ; i++) { 
          arr.push(<div> <FontAwesomeIcon icon={ faStar } /></div>);
        }; 
        for(let i = 0; i < 5 - props.rating; i++) {
          arr.push(<div> <FontAwesomeIcon icon={ farStar } /></div>);
        };
        return(
          <div className="flex orange review">
            { 
              arr.map((item) => { return item })
            }
          </div>
        )
    }

    

  return (
    <div className="flex wrapContainer">
    {
     props.products.map((item, index) => {
       return( 
          <div className="productContainer" key={index}>
          <div className="productImg menuElement">
            { props.addImage( item.img, '100%', item.img ) }
          </div>
          <div><h2> { item.type } </h2></div>
          <h4>{ item.additionals }</h4> 
          <div><h3> { item.brand } </h3></div>
          { ratings(item) } 
          <div className='blink_me'>
          <h1> { item.price } € </h1> 
          </div>
          </div>
              )
            })
        } 
    </div>
  )
}
