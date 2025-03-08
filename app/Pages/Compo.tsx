function logo(){
    return(
      <img src="./Img/Logo.png"></img>
    );
  }
  
  function Menu(){
    return(
      0
    );
  }
  
  function Notifications(){
    return(
      0
    );
  }
  
  function Topic(){
    return(
      0
    );
  }
  
  function Articles() {
    return(
      0
    );
  }
  
  function Searchbar(){
    return(
      0
    );
  }
  
  function Feed(titre:string){
    return(
    <>
    <h1>{titre}</h1>
    <Searchbar />
    <Articles />
  
    </>
    );
  }