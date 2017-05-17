/**
 * Created by Alex on 14/05/2017.
 */

import React from 'react';
import './people.styl';

class People extends React.Component {
    render() {
        return (
            <div className="people" ref={this.props.peopleRef}>
                    {this.props.children}
            </div>
        );
    }
}

export default People;
