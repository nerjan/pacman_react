import React, {Component} from 'react';
import './style.css';
import Pacman from '../Pacman';
import Ghost from '../Ghost';

class Board extends Component {
    render() {
        return (
        <div className="board">
            {/* <Food /> */}
            <Pacman />
            <Ghost />
            {/* <Ghost /> */}
        </div>
        )
    }
}

export default Board;