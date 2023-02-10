import { useState, useEffect } from 'react'
 
type Repository = {
    full_name: string;
    description: string;
}

function Github() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(()=>{
    fetch('https://api.github.com/users/felipegenuino/repos')
    .then(response => response.json())
    .then(data=>{
        setRepositories(data)
    })
  },[])

  return (
    <ul>
        {repositories.map(repo => {
          return(
          
            <li key={repo.full_name}>
                  <strong> {repo.full_name} </strong>
                  <p> {repo.description} </p>
                  <hr />
              </li>
        
          )
        })}
      </ul>
   )
}

export default Github
