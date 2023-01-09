import React from "react";



function Search({value, setValue}) {
  
  return (
    <>
      <form action="" className="search__form">
        <input type="text" onChange={(event)=> setValue(event.target.value)}/>
      </form>
    </>
  );
}

export default Search;
