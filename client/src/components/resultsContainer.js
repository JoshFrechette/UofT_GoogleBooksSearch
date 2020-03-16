import React from "react";
import SearchResult from "./searchResult";
import SavedResult from "./savedResult";


//Use better to DRY 
function ResultsContainer(props) {
    //Display for search page
    if (props.path === "/") {
        return (
            <div id="resultsContainer">
                <h3>Results</h3>

                {props.bookData.map((book) => {
                    const bookResult = book.volumeInfo;
                    console.log(bookResult)
                    return <SearchResult
                        title={bookResult.title}
                        authors={bookResult.authors}
                        description={bookResult.description}
                        link={bookResult.canonicalVolumeLink}
                        img={bookResult.imageLinks}
                        path={props.path}
                        id={bookResult.id}
                        key={book.id} />
                })}
            </div>
        );
        //Display for saved page
    } else if (props.path === "/saved") {
        if (props.savedBooks.length > 0) {
            console.log("savedBooks: " + props.savedBooks)
            return (
                <div id="resultsContainer">
                    <h3>Saved Books</h3>
                    {props.savedBooks.map((book) => {

                        console.log("book: " + book._id)
                        return <SavedResult
                            title={book.title}
                            authors={book.authors}
                            description={book.description}
                            link={book.link}
                            img={book.img}
                            path={props.path}
                            id={book._id}
                             key={props.id}/>
                    })}
                </div>
            );
        } else {
            //Display if no books have been saved
            return (
                <div id="resultsContainer">
                    <h3>Saved Books</h3>
                    <p>No Saved Books!</p>
                </div>
            );
        }
    }
}

export default ResultsContainer;