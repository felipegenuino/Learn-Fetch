import { useFetch } from './hooks/useFetch';

type Repository = {
    fullname: string;
    description: string;
 }

 
function GithubWithUseFetchGithub() {

  const {data: repositories, isLoading} = useFetch<Repository[]>('https://api.github.com/users/felipegenuino/repos',)
 
  

  return (
    <article style={{display: 'flex'}}>

      {isLoading && <p>Carregando...</p>}

 
        {repositories?.map(item => {
          return(
            <section key={item.fullname} >
                  <h2> {item.fullname} </h2>
                  <p>{item.description}</p>
              </section>
        
          )
        })}
      </article>
   )
}

export default GithubWithUseFetchGithub
