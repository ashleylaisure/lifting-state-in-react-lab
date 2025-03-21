const Ingredient = (props) => {

    return (
        <div>
            <h1>{props.title === "list" ? "Available Ingredients"
                : "Burger Stack"}</h1>

            <p>{props.title === "stack" && props.ingredients.length === 0 ? "Add some Ingredients" : ''}</p>

            <ul>
                {props.ingredients.map((ingredient, index) => (
                    <li key={index} style={{backgroundColor: ingredient.color}} >
                        {ingredient.name}

                        {props.handleAddToBurger ?
                            (<button onClick={() => props.handleAddToBurger(ingredient)}>+</button>)
                            : (<button onClick={() => props.handleRemoveFromBurger(ingredient)}>x</button>)
                        }
                        
                    </li>
                ))}
            </ul>

        </div>
        
    )
};

export default Ingredient;