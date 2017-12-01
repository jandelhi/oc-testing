import React from "react"

export default class Wine extends React.Component {
    render() {
        return(
            <div>
                Hello for now! This will be wine info soon.
                <br/>
               <span> Name: {this.props.info.name}</span>
            </div>
        );
    }
}

Wine.propTypes = {
  };