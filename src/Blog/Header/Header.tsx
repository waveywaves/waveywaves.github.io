import React from 'react';
import './Header.css';
import StickyHeader from './StickyHeader'
import HeaderSketch from './HeaderSketch'

interface IProps {
}

interface IState {
  isSticky: boolean
}

class Header extends React.Component {
  state : IState
  props: IProps

  constructor(props: IProps){
    super(props)
    this.state = {
      isSticky: false
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isSticky = Math.round(window.scrollY) >= 100;
      if (isSticky !== this.state.isSticky) {
          this.setState({ 
            isSticky: isSticky,
          })
      }
    });
  }

  render(){

    return (
      <div>
        <div>
          <HeaderSketch />
        </div>
        <div className={this.state.isSticky ? 'sticky' : 'stickyHeader'}>
          <StickyHeader/> 
        </div>
      </div>
    )
  }
}

export default Header;
