import { useFetch } from './hooks/useFetch';

type Repository = {
    idDrink: number;
    strDrink: string;
    strDrinkThumb: string;
    drinks: Array<Repository>;
}

 
function GithubWithFetch() {

  const {data: drinks, isLoading} = useFetch<Repository[]>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail',)
 
  console.log( drinks)
 
  const drinksArray = drinks?.drinks || []
  

  return (
    <article style={{display: 'flex'}}>

      {isLoading && <p>Carregando...</p>}

 
        {drinksArray?.map(item => {
          return(
          
            <section key={item.idDrink} >
                  <h2> {item.strDrink} </h2>
                  <img width={300} src={item.strDrinkThumb} alt={item.strDrink} />
              </section>
        
          )
        })}
      </article>
   )
}

export default GithubWithFetch
