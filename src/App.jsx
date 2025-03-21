import { useState } from 'react'

import IngredientList from './components/IngredientList/IngredientList.jsx';
import BurgerStack from './components/BurgerStack/BurgerStack.jsx';
import Ingredient from './components/Ingredient/Ingredient.jsx';  

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

    const newIngredientList = ingredients.filter(el => el.name !== ingredient.name)
    setIngredients(newIngredientList)
  }


  const handleRemoveFromBurger = (ingredient) => {
    const newStack = stack.filter(el => el.name !== ingredient.name )
    setStack(newStack)

    setIngredients([...ingredients, ingredient])
  }



  return (
    <main>
      <h1>Burger Stacker</h1>

      <section>

        {/* <IngredientList ingredients={ingredients} handleAddToBurger={handleAddToBurger} />

        <BurgerStack stack={stack} handleRemoveFromBurger={handleRemoveFromBurger}/> */}

        <Ingredient title="list" ingredients={ingredients} handleAddToBurger={handleAddToBurger} />

        <Ingredient title="stack" ingredients={stack} handleRemoveFromBurger={handleRemoveFromBurger}/>

      </section>
    </main>
  );
};


export default App
