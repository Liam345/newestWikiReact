import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import WikiList from './components/wiki_list';

class App extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            wikiList:[]
        };
    this.WikiSearch('San');        
    }
    WikiSearch(term){
        if (!term){
            return;
        }
        var myInit = {
            method:"GET"
        };

        fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=${term}`,myInit).then((response)=>{
            return response.json();
        }).then((data)=>{
            console.log(data);
            console.log(data.query.search);
            this.setState({
            wikiList : data.query.search
        });
        
            console.log(this.state.wikiList.length);
        });
    }
    render(){
        return (<div>
        <SearchBar searchedFor={term=>this.WikiSearch(term)}/>
        <WikiList searchedList={this.state.wikiList}/>
        </div>);
}
}

ReactDOM.render(<App/>, document.getElementById("app"));