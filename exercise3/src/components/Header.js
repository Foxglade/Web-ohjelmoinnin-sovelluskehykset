import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSignOutAlt  } from '@fortawesome/free-solid-svg-icons'
import {  useState } from 'react';


export default function Header(props) {

 

  const [ searchBarText, setSearchBarText ] = useState("");

 

  const handleSearchBarTextChange = (event) => {
    setSearchBarText(event.target.value);
  }
  

  return(
    <div className="header">
     
        <div className="headerLogo">{ props.addImage('logo.PNG') } </div>
        
          
            
            <input className="searchInput" placeholder='Phone, console etc....' type="text" name="search" 
            onChange={ handleSearchBarTextChange } value={ searchBarText }/>
            <button className=" searchIcon" type="button"  onClick={ () => props.onAddClick(  searchBarText ) }>
              <FontAwesomeIcon icon={ faSearch } size="1x"/>
            </button>
         <form className={ props.adminMode === true ? "menuElement hidden" : "menuElement" } > 
        </form> 
        
          <button className=" searchIcon2" type="button" 
            onClick={ () => props.setAdminMode( !props.adminMode ) }>
            { props.adminMode === true ? 
              <span>Admin  <FontAwesomeIcon icon={ faSignOutAlt } size="1x"/></span> : 
              <span>Admin  </span> 
            }
          </button>
       
      
      <div>
       
      </div>
    </div>
  )
}

