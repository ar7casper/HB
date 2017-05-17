/**
 * Created by Alex on 15/05/2017.
 */

import React from 'react';

class Details extends React.Component {
    render() {
        const showDetails = this.props.showDetails;
        
        return (
            <div className="details">
                <div className="name">{this.props.name}</div>
                <div className="title">
                    <span className="title">{this.props.job} | @{this.props.companyName}</span>
                </div>
                <div className={`extraDetails ${showDetails ? 'show' : 'hide'}`}>
                    <div className="phone">Phone Number - {this.props.phone}</div>
                    <div className="email">{this.props.email}</div>
                </div>
            </div>
        )
    }
}

export default Details;