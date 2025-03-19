import { useState } from 'react'

import IngredientList from './components/IngredientList/IngredientList.jsx';
import BurgerStack from './components/BurgerStack/BurgerStack.jsx';

import './App.css'

const App = () => {

  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const [ingredients, setIngredients] = useState(availableIngredients)
  const [stack, setStack] = useState([])

  const handleAddToBurger = (ingredient) => {
    setStack([...stack, ingredient]);
    removeFromList(ingredient.name)
  }

  const removeFromList = (removeIngredient) => {
    const newIngredientList = ingredients.filter(ingredient => ingredient.name !== removeIngredient)
    setIngredients(newIngredientList)
  }


  const handleRemoveFromBurger = (removeIngredient) => {
    const newStack = stack.filter(ingredient => ingredient.name !== removeIngredient.name )
    setStack(newStack)
    setIngredients([...ingredients, removeIngredient])
  }



  return (
    <main>
      <h1>Burger Stacker</h1>

      <section>

        <div>
          <h1>Available Ingredients</h1>

          <ul>
            {ingredients.map((ingredient) => (
              <li style={{backgroundColor: ingredient.color}} >
                {ingredient.name} 
                <button onClick={() => handleAddToBurger(ingredient)}>+</button>
              </li>
          
              
            ))}
          </ul>

        </div>

        

        <div>

          <h1>Burger Stack</h1>

          <p>{stack.length === 0 ? "Add some Ingredients" : ''}</p>

          <ul>
            {stack.map((ingredient) => (
              <li style={{backgroundColor: ingredient.color}} >
                {ingredient.name} 
                <button onClick={() => handleRemoveFromBurger(ingredient)}>x</button>
              </li>
            ))}
          </ul>

        </div>

      </section>
    </main>
  );
};


export default App
