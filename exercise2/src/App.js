import './App.css';
import Title from './components/Title'
import Listcomponents from './components/ShoppingListContent';
import { useState } from 'react';
import ListAdditionInputs from './components/ListAdditionInputs';
function App() {
  
  const [ counterValue, setCounterValue] = useState(0);
  const [ counterValue1, setCounterValue1] = useState(0);
  const [ counterValue2, setCounterValue2] = useState(0);
  const [ counterValue3, setCounterValue3] = useState(0);
  const [ shoppingListItems, setShoppingListItems] = useState([ 
    {
      id : 1,
      name: "Milk",
      qty: 4,
      isChecked: false
    },
    {
      id : 2,
      name: "Bananas",
      qty: 4,
      isChecked: false
    },
    {
      id : 3,
      name: "Bread",
      qty: 4,
      isChecked: false
    },
    {
      id : 4,
      name: "Eggs",
      qty: 4,
      isChecked: false
    },
  ]);
  
  const [description, setDescription] = useState("");

  const handleItemCheckedToggle = (item) => {
    console.log("Toggling item status");
    console.log(item);

    let newShoppingListItems = [...shoppingListItems];


    let itemClickedIndex = shoppingListItems.findIndex(i => item.id == i.id);
    if(itemClickedIndex != -1){
      //itemClicked.isChecked = !itemClicked.isChecked;
    let newElement = {...newShoppingListItems[itemClickedIndex] }
    newElement.isChecked = !newElement.isChecked;
    newShoppingListItems[itemClickedIndex] = newElement;
    setShoppingListItems(newShoppingListItems);
    }
  }

  const onListAddition = (quantity, description) => {
    console.log('onListAddition');
    console.log(quantity, description);

    let newShoppingListItems = [...shoppingListItems, {
      id : shoppingListItems.length +1 ,
      name: description,
      qty: quantity,
      isChecked: false

    }];

    setShoppingListItems(newShoppingListItems);

  }
  
  return (
    <div className="App">
      <Title />
      <li>
      <div> {counterValue}ltr  Milk </div>
      <div> {counterValue1}pcs  Bananas </div>
      <div> {counterValue2}x  Bread </div>
      <div> {counterValue3}x  Eggs </div>

      </li>
      <button onClick= {() => setCounterValue(counterValue+1)}
      >Milk </button>
      <button onClick= {() => setCounterValue1(counterValue1+1)}
      >Bananas </button>  
      <button onClick= {() => setCounterValue2(counterValue2+1)}
      >Bread </button>  
      <button onClick= {() => setCounterValue3(counterValue3+1)}
      >Eggs </button>      

    </div>

  );
}

export default App;
