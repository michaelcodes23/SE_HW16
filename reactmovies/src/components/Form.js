//importing React library
import React from "react";
//Defining a function
const Form = (props) => {
    //State to hold the data within our form
    const [formData, setFormData] = React.useState({searchterm: "",
    });
    //Updates formData when we type into the form
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        //use the event object to detect key and value to update
        event.preventDefault();
        //pass the search term to movesearch prop, which is App.js getMovie function
        props.moviesearch(formData.searchterm)
    }
    return (
        <div>
            <h1>The Form Component</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type ="text"
                    name = "searchterm"
                    onChange={handleChange}
                    value={formData.searchterm}
                />
                <input type ="submit" value = "submit" />
            </form>
        </div>
    )
}


//exporting the function / component to use in other files

export default Form;