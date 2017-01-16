import React from 'react';

class SearchBar extends React.Component{
constructor(props){
    super(props)
    this.state ={
        searchTerm:''

    };
}
onInputChange(term){
        console.log(term);
        this.setState({searchterm:term});
        this.props.searchedFor(term);
    }
render(){
    return(
        <div>
        <h1>Wiki Viewer</h1>
        <input 
        onChange={(event)=>this.onInputChange(event.target.value)}/> 
        </div>
    );
}

}

export default SearchBar;