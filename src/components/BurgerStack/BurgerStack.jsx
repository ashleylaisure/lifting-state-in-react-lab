
const BurgerStack = (props) => {
    
    return (
        <div>

            <h1>Burger Stack</h1>

            <p>{props.stack.length === 0 ? "Add some Ingredients" : ''}</p>

            <ul>
                {props.stack.map((ingredient, index) => (
                    <li key={index} style={{backgroundColor: ingredient.color}} >
                    {ingredient.name} 
                    <button onClick={() => props.handleRemoveFromBurger(ingredient)}>x</button>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default BurgerStack;