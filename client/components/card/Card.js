/**
 * Created by Alex on 14/05/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Details from './Details';
import './card.styl';

class Card extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            hover: false
        };
        
        this.toggleHover = this.toggleHover.bind(this);
    }
    
    toggleHover() {
        this.setState({
            hover: !this.state.hover
        });
    }
    
    render() {
        const backgroundImg = {
            backgroundImage: `url(${this.props.profileImageSrc})`
        };
        
        const showDetails = this.state.hover;
        
        return (
            <div className={`card gridItem ${showDetails ? 'hover' : ''}`}
                 onMouseEnter={this.toggleHover}
                 onMouseLeave={this.toggleHover}
                 style={
                 {
                     width: `${this.props.width}px`,
                     margin: `${this.props.margin}px`
                 }
                 }
                 ref={this.props.cardRef}
            >
                <div className="wrapper">
                    <div className="images" style={backgroundImg}>
                    </div>
                    <div className={`details`}>
                        <div className="icon">
                            <img src={this.props.iconSrc} alt="HoneyBook"/>
                        </div>
                        <div className="name">{this.props.name}</div>
                        <div className="title">
                            <span className="title">{this.props.job || 'Unknown Position'}
                                | @{this.props.companyName}</span>
                        </div>
                        <div className={`extraDetails ${showDetails ? 'show' : 'hide'}`}
                             style={{visibility: showDetails ? 'visible' : 'hidden'}}>
                            <div className="phone">Phone Number - {this.props.phone}</div>
                            <div className="email">{this.props.email}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Card.propTypes = {
    name: PropTypes.string,
    companyName: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    profileImageSrc: PropTypes.string,
    iconSrc: PropTypes.string,
    job: PropTypes.string,
    width: PropTypes.number,
    margin: PropTypes.number
};

export default Card;