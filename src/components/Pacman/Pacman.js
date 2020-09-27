import React, {Component} from 'react';
import {ReactComponent as PacmanSvg} from './pacman.svg';
import './style.css';
class Pacman extends Component {

    state = {
        direction: 'right',
        position : {
            top: 60,
            left: 0,

        }
    }

    render() {
        return (
            <div 
                className="pacman" 
                style={this.state.position}
            >
                <PacmanSvg />
            </div>
        )
    }

}

Pacman.defaultProps = {
    step: 50,
    size: 50, // pacman size 50x50
    border: 10 * 2,
    topScoreBoardHeight: 50
}

export default Pacman;