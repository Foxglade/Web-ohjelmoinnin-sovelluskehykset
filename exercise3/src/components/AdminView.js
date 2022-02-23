import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function AdminView() {

  const [ productList, setProductList ] = useState([]);

  async function getData() {
    const results = await axios.get('http://localhost:3000/products/');
    return results.data;
  }
  
  useEffect(() => {
    getData().then(setProductList);
  }, []);

  const onItemDelete = (item) => {
    axios.delete('http://localhost:3000/products/'+item.id)
      .then(function (response) {
      console.log(response);
    }).then(function () {
      getData().then(setProductList);
    });
  }

  const onItemAdd = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/products/', {
      type: event.target.type.value,
      brand: event.target.brand.value,
      rating: event.target.rating.value,
      price: event.target.price.value,
      img: event.target.img.value,
      category: event.target.category.value,
      additionals: event.target.additionals.value,
      tags: event.target.tags.value
    }).then(function (response) {
      console.log(response);
    }).then(function () {
      getData().then(setProductList);
    });
  }
  
  const CreateProductList = (props) => {
    
    return(
      props.products.map((item) => {
        
        return (
          <div>
            <div className='add'>{ item.id }</div>
            <div className='add'>{ item.brand }</div>
            <div className='add'>{ item.type }</div>
            <div className=''>{ item.price }€</div>
            <div className=''>
              <button className='' onClick={()=> onItemDelete(item)}>Delete <FontAwesomeIcon icon={ faTrashAlt }/></button>
            </div>
          </div>  
        ) 
      })
    )
  }

  return (
    <div>
      <div className=''>
        <h1>Admin Mode</h1>
        
        <div>
          <h3>Add new product</h3>
          <form onSubmit={ onItemAdd }>
              
              <div className="add"><div className='text'>Name: </div> <input type="text" name="type"/></div>
              <div className="add"><div className='text'>Brand: </div> <input type="text" name="brand"/></div>
              <div className="add"><div className='text'>Price: </div> <input type="number" name="price"/></div>
              <div className="add"><div className='text'>Review 1-5: </div> <input type="number" name="rating"/></div>
              <div className="add"><div className='text'>Picture: </div> <input type="text" name="img"/></div>
              <div className="add"><div className='text'>Search Terms: </div> <input type="text" name="tags"/></div>
              <button className='searchIcon3'>Add product</button>
              <div className='productContainer'>
          
          <CreateProductList products={ productList }/> 
        </div>
          </form>
        </div>
      </div>
    </div>
  )
}
