import React, {Component} from 'react';
import P5Wrapper from '../../P5Wrapper/P5Wrapper'


function sketch(p : any){
  var x = 100;
  var y = 100;

  p.setup = function() {
    p.createCanvas(200,200)
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x,y,50,50);
  };
}

interface IProps {}

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
