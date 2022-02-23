import React from 'react'

export default function ShoppingListContent(props) {
 
    function onListItemClick(element) {
        //console.log(element);
        //console.log('Click');
        props.itemClickedEvent(element);
    }
 
    return (
    <div>
        <ul>
            {
            props.listItems.map((item, index) =>  {

                return <li onClick= {() => onListItemClick(item)} key={index}
                className={item.isChecked ? "isChecked" : null} 
                > {item.qty} {item.name} 
                </li>

            })
            }
        </ul>
        <div> {props.descriptionFieldValue} </div> 
    </div>)
}
