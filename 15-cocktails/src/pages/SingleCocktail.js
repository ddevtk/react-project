import React, { useCallback, useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [cocktail, setCockTail] = useState(null);

  const getCocktail = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${url}${id}`);
      const data = await res.json();

      if (data.drinks) {
        const {
          strInstructions: instructions,
          strGlass: glass,
          strDrink: name,
          strDrinkThumb: imgUrl,
          strAlcoholic: info,
          strCategory: category,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
        ];
        const newCocktail = {
          name,
          imgUrl,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };
        setCockTail(newCocktail);
      } else {
        setCockTail(null);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getCocktail();
  }, [id, getCocktail]);

  if (isLoading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2 className='section-title'>No cocktail found !</h2>;
  }

  const { name, imgUrl, info, category, glass, instructions, ingredients } =
    cocktail;

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        Back home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={imgUrl} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name: </span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category: </span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info: </span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass: </span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>Instructions: </span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>Ingredients: </span>
            {ingredients.join(', ')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
