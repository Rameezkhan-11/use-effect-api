import React, {useEffect, useState} from 'react';

function App() {

const [repo,setRepo] = useState([{}]);
useEffect(()=>{

  async function getRepo(){

    const api = await fetch("https://api.github.com/users/Rameezkhan-11/repos")
    const data = await api.json();
    console.log(data);
    setRepo(data)
  }


getRepo()

},[])


  return (
    <>

    <h1>Hello World</h1>
    <ul>
    <ul>
    
      </ul>
        
       {repo.map((obj1,ind)=>{

        return(<li key={ind}>{obj1.name}</li>)


       })}
        
    <br />
    <h2>Repos Url</h2>

    {repo.map((obj1,ind)=>{

return(

<li key = {ind}><a href = {obj1.clone_url}> {obj1.clone_url}<br /></a> </li>)


})}
    
    
    </ul>
    
    
    
        </>
  );
}

export default App;
