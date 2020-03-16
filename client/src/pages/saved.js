import React, { Component } from "react";
import Routes from "../utils/routes";
// import { render } from "@testing-library/react";
import ResultsContainer from "../components/resultsContainer";

class Saved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savedBooks: []
        }
    }
    //Replace with useEffect hook once overall app functions
    componentDidMount() {
        Routes.getBooks().then(
            (response) => {
                console.log("getBooks :" , response.data)
                this.setState({ savedBooks: response.data });
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }
    // Iterate saved book response
    render() {
        return (
            <main>
                <ResultsContainer savedBooks={this.state.savedBooks} path={this.props.match.path} />
            </main>
        );
    }
}

export default Saved;