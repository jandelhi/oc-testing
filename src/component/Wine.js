import React from "react"

export default class Wine extends React.Component {
    render() {
        const wines = this.props.info.wines.map((wine) => {
            return (    <div>
                <span> Name: {wine.name}</span><br/>
                <span>Color: {wine.color}</span><br/>
                <span>Year: {wine.year}</span><br/>
                <span>Type: {wine.type}</span><br/>
                <span>Country: {wine.country}</span>
                <br/>
                <br/>
             </div>)
        });

        return(
            <div>{wines}</div>
        );
    }
}

