import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props){
        super(props);

        // console.log("Parent Constructor");
    }

    componentDidMount() {
        // console.log("Parent Component Did Mount");
    }

    render() {
        // console.log("Parent Render");
        return (
            <div>
                <h1>About</h1>
                <div>
                    loggedIn User
                    <UserContext.Consumer>
                        {
                            ({loggedInUser}) => (<h1 className="text-lg font-bold">{loggedInUser}</h1>)
                        }
                    </UserContext.Consumer>
                </div>
                <h2>This is Namaste React Web Series</h2>
                {/* <User name="Akshay saini" /> */}
                <UserClass name="Akshay saini (class)" location="Dehradun class" />
            </div>
        );        
    }
}

/*
- Parent Constructor
- Parent render

   - First Constructor
   - First render

   - Second Constructor
   - Second render

   <DOM UPDATES - IN SINGLE BATCH>

   - First ComponentDidMount
   - Second ComponentDidMount

- Parent ComponentDidMount

*/

export default About;