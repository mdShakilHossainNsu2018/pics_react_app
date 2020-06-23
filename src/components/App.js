import React from 'react';
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageLists";

class App extends React.Component {

    state = {images: []};

    onSearch = (value) => {
        unsplash.get('search/photos/', {
            params: {query: value},

        }).then(data => {
            this.setState({images: data.data.results});
        }).catch(error => {
            console.log(error)
        })

    };


    render() {
        return (<div className="container ui" style={{marginTop: '10px'}}><SearchBar onSubmit={this.onSearch}/>

        <p>{this.state.images.length} images found.</p>
            
            <ImageList images={this.state.images} />

        </div>)
    }
}


export default App;
