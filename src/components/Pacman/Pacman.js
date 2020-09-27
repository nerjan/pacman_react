import React, {Component} from 'react';
import {ReactComponent as PacmanSvg} from './pacman.svg';
import './style.css';
class Pacman extends Component {

    state = {
        direction: 'right',
        position : {
            top: 0,
            left: 0,

        }
    }

    constructor(props) {
        super(props);
        this.pacmanRef = React.createRef();
    }

    componentDidMount() {
        this.pacmanRef.current.focus();
    }

    handleKeyDown  = (event) => {
        const currentTop = this.state.position.top;
        const currentLeft = this.state.position.left;
        const {step, border, size, topScoreBoardHeight} = this.props;
        // 39 ArrowRight
        // 40 ArrowDown
        // 37 ArrowLeft
        // 38 ArrowUp
        if (event.key === 'ArrowUp') {
            this.setState({
                position:{
                    top: Math.max(currentTop - step, 0),
                    left: currentLeft
                },
                direction: 'up'


            });
        }else if (event.key === 'ArrowRight'){
            this.setState({
                direction: 'right',
                position:{
                    top: currentTop,
                    left: Math.min(currentLeft + step, window.innerWidth - border - size)
                }

            });
        }else if (event.key === 'ArrowDown'){
            this.setState({
                direction: 'down',
                position:{
                    top: Math.min(currentTop + step, window.innerHeight - border - size - topScoreBoardHeight),
                    left: currentLeft
                }

            });
        }else if (event.key === 'ArrowLeft'){
            this.setState({
                direction: 'left',
                position:{
                    top: currentTop,
                    left: Math.max(currentLeft - step,0)
                }

            });
        }
    }
    render() {
        const {direction, position } = this.state;
        return (
            <div 
                ref={this.pacmanRef}
                className={ `pacman pacman-${direction}` }
                tabIndex="0"
                onKeyDown={this.handleKeyDown}
                style={position}
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