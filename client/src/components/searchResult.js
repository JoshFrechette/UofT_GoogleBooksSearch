import React, { Component } from "react";
import Routes from "../utils/routes";
// import { BrowserRouter as Router} from "react-router-dom";

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: false
        }
        this.handleSaveClick = this.handleSaveClick.bind(this);
    }

    handleSaveClick = function(e) {
        this.setState({saved: true});
        console.log("saveclick ", this.props)
        const bookData = {
            title: this.props.title,
            authors: this.props.authors,
            link: this.props.link,
            img: this.props.img.thumbnail,
            description: this.props.description
        
        }
        e.preventDefault();
        Routes.addBookToDB(bookData).then(
            (response) => {
                console.log(response);
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    render() {
        return(
            <div className="bookResult" id={(this.props.id)? this.props.id : null} style={{display: this.state.deleted? "none" : "block"}}>
                <div className="row">
                    <div className="oneBookInfo">
                        <h5>{this.props.title}</h5>
                        <p>By: {(this.props.authors)? this.props.authors.join(",") : "N/A"}</p>
                    </div>
                    <div className="btn btn-books">
                        {
                            (this.props.link)? <a href={this.props.link} target="_blank" rel="noopener noreferrer"><button type="button" name="view">View</button></a> : null
                        }
                        {
                            (this.props.path ==="/")? <button type="button" name="save" onClick={this.handleSaveClick} disabled={this.state.saved}>{(this.state.saved)? "Saved" : "Save"}</button> : <button type="button" name="delete" onClick={this.handleDeleteClick} disabled={this.state.deleted}>Delete</button>
                        }
                    </div>
                </div>
                <div className="row">
                        {(this.props.img)? <img src= {
                            this.props.img.thumbnail? this.props.img.thumbnail: ""
                        } alt="Book Cover"/> : null}
                    <p>{(this.props.description)? this.props.description: "N/A"}</p>
                </div>
            </div>
        )
    }
}

export default SearchResult;