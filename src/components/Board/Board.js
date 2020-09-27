import React, {Component} from 'react';
import './style.css';
import Pacman from '../Pacman';
import Ghost from '../Ghost';
import Food from '../Food'
class Board extends Component {
    render() {
        return (
        <div className="board">
            <Food position={{top:100, left:100}}/>
            <Pacman/>
            <Ghost  color="red"/>
            <Ghost  color="yellow"/>
            <Ghost  color="blue"/>
            <Ghost  color="pink"/>

        </div>
        )
    }
}

export default Board;