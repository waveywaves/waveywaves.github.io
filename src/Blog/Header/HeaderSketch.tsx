import React, {Component} from 'react';
const p5 = require('p5');
const P5Wrapper = require("react-p5-wrapper");

class HeaderSketch extends Component {
  sketch: any;
  constructor(props : any) {
    super(props)
    var p5Sketch  = function(p : any){
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
  this.sketch = new p5(p5Sketch);
  }
  
  render() {
    return (
      <div>
        <P5Wrapper sketch={this.sketch}/>
      </div>
    )
  }
}

export default HeaderSketch;
