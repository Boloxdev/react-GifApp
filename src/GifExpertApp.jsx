import { useState } from "react";
import { AddCategory, GifGrid} from "./components";


const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'One Piece' ]);
   
    const onAddCategory = (newCategory) => {

        if( categories.includes(newCategory)) return;

        setCategories([ newCategory, ...categories]);
        //setCategories( cat => [...cat, 'valorant']);
    }

    console.log(categories);
  return (
    <> 

        <h1>GiftExpertApp</h1>


        <AddCategory 
            // setCategories={ setCategories }
            onNewCategory={ onAddCategory }
        />

        
        <ol>
            { 
                categories.map( (category) => 
                    ( 
                        <GifGrid 
                            key={ category }
                            category={ category }
                        /> 
                    ))
            } 
        </ol>


    </>
  )
}

export default GifExpertApp