import React from "react"

export default class Wine extends React.Component {
    render() {
        return(
            <div>
               <span> Name: {this.props.info.name}</span><br/>
               <span>Color: {this.props.info.color}</span><br/>
               <span>Year: {this.props.info.year}</span><br/>
               <span>Type: {this.props.info.type}</span><br/>
               <span>Country: {this.props.info.country}</span>
            </div>
        );
    }
}
