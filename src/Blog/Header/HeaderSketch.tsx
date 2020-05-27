import React, {Component, RefObject} from 'react';
import P5Wrapper from '../../P5Wrapper/P5Wrapper'
import { element, func } from 'prop-types';
import p5 from 'p5'

var sketch = (p: p5) => {
  var width = window.innerWidth
  var height = window.innerHeight*0.1
  p.setup = function() {
    p.createCanvas(width, height)
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.textSize(100)
    p.textAlign("center")
    p.text("WAVEYWAVES", width/2, height/2)
  };
}

interface IProps {
}

interface IState {
  sketch(p: any) : void
}

class HeaderSketch extends Component {
  state: IState;
  
  constructor(props : IProps) {
    super(props)
    this.state = {
      sketch: sketch
    }
  }

  
  render() {
    return (
      <div>
        <P5Wrapper sketch={this.state.sketch}/>
      </div>
    )
  }
}

export default HeaderSketch;
