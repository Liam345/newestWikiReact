import React from 'react';

const WikiItem = ({searchedItem}) =>{
   // let snip = searchedItem.snippet;
   let url = `https://en.wikipedia.org/wiki/${searchedItem.title}`;

    return(
        <a href={url} target="_blank" className="link"> 
        <div className="itemBox" >
         
        <h2>{searchedItem.title}</h2>
        <h3 dangerouslySetInnerHTML={{__html:searchedItem.snippet}}></h3>
        </div>
        </a>
    );
}
export default WikiItem;