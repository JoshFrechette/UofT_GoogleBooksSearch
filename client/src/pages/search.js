import React , { Component } from "react";
import SearchInput from "../components/searchInput";
import ResultsContainer from "../components/resultsContainer";
import Routes from "../utils/routes";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookInput: "",
            bookData: []
        }
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({bookInput: e.target.value})
    }

    handleSearchClick(e) {
        e.preventDefault();
        Routes.searchBooks(this.state.bookInput)
            .then(
                (response) => {
                    console.log(response.data.items)
                    this.setState({bookData: response.data.items});
                    this.setState({bookInput:""});
                }
            );
    }
    // Render search results
    render() {
        return (
            <main>
                <SearchInput handleChange={this.handleChange} handleSearchClick={this.handleSearchClick} />
                {(this.state.bookData.length > 0) ?
                    <ResultsContainer bookData={this.state.bookData} path={this.props.match.path} /> : null    
                }            
            </main>
        )
    }

}

export default Search;