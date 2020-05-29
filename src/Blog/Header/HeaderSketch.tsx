import React, {Component, RefObject} from 'react';
import P5Wrapper from '../../P5Wrapper/P5Wrapper'
import { element, func } from 'prop-types';
import p5 from 'p5'

var sketch = (p: p5) => {
  var width = window.innerWidth
  var height = window.innerHeight*0.1
  var r = 0;
  var g =0;
  var b = 0;
  var ascendR = true;
  var ascendG = true;
  var ascendB = true;

  p.setup = function() {
    p.createCanvas(width, height)
    p.background(r, g, b);
    p.colorMode(p.HSL, height, height, height);
  };

  p.draw = function() {
    p.background(r, g, b);
    r = updateValue(r, ascendR);
    g = updateValue(g, ascendG);
    b = updateValue(b, ascendB);
    p.fill(255-r, 255-g, 255-b);
    p.textSize(50)
    p.textAlign("center")
    p.text("WAVEYWAVES", width/2, height/2)
  };

  function ascendOrDescend(x: number, ascend: boolean){
    if (x >= 255){
      ascend = false
    }
    if (x <= 0) {
      ascend = true
    }
    return ascend
  }

  function updateValue(x: number, ascend: boolean){
    if (ascendOrDescend(x, ascend)){
        x++;
      } else {
        x--;
      }
    return x;
}
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
