import React, {Component} from 'react'
import './Header.scss'
import Rounds from './Rounds/Rounds'


class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <div className='Header_wrapper'>
          <img className='Logo' src={'/src/assets/images/logo.svg'} alt='Logo' />
          <h3>Score: <span>0</span></h3>
        </div>
        <Rounds/>

      </div>
    )
  }
}

export default Header