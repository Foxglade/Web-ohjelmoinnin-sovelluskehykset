import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import ProductsContainer from './components/ProductsContainer';
import AdminView from './components/AdminView';
import axios from 'axios';

function App() {

  const [ productList, setProductList ] = useState([]);
  const [ AdminMode, setAdminMode ] = useState(false);

  useEffect(() => {
    getData().then(setProductList);
  }, []);

  async function getData() {
    const results = await axios.get('products.json');
    return results.data;
  }

  const searchHandler = ( searchText) => {
    var newSearchArgument = {
       'search': searchText
    };
    
    getData().then(function(res)
    {setProductList(searchEngine(res,newSearchArgument))});
  }

  const searchEngine = (products, searchArgument) => {
    var search = searchArgument.search.toString().toLowerCase().trim();
    var searchResult = products.filter(item => {
    return Object.keys(item).some(key => 
      item[key].toString().toLowerCase().includes(search));
    });
    
    return searchResult;
  }


  const addImg = (file, size, alt) => {
    return(
      <img alt={ alt }  width={ size } src={ file }/>
    )
  }
  
  let output =  <ProductsContainer 
    products={ productList }
    addImage={ addImg }
  />;
  if( AdminMode == true ) {
    output = <AdminView/>;
  }

  return (
    <div>
      <Header 
        addImage={ addImg }
        searchResult={ productList }
        onAddClick={ searchHandler }
        adminMode={ AdminMode }
        setAdminMode={ setAdminMode }
      />
      <div>
      
        { output }
      </div>
    </div>
  )
}

export default App;