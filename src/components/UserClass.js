import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "",
            }
        };

        // console.log(this.props.name + "Child Constructor");
    }

    async componentDidMount() {
        // console.log(this.props.name + "Child Component Did Mount");
        // Api call
        
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        
        this.setState({
            userInfo: json,
        });

        // console.log(json);
    }

    componentDidUpdate() {
        // console.log("Component Did Update");
    }

    componentWillUnmount() {
        // console.log("Component Will Unmount");
    }

    render() {

        // console.log(this.props.name + "Child Render");

        const {name, location, avatar_url} = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url} alt="Image Loading..." />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @akshaymarch7</h4>
            </div>
        );
    }
}

/**
 *  --- Mounting ---
 *  Constructor (dummy)
 *  Render (dummy)
 *       <HTML Dummy>
 *  Component Did Mount
 *       <API Call>
 *       <this.setState> --> state variable is updated
 *  --- Update
 *      render(Api data)
 *      <HTML (new API Data)
 *      Component Did Update
 */

export default UserClass;