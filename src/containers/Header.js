import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
export default class MenuExamplePointing extends Component {
  state = { activeItem: 'home' };
  handleItemClick = (e, { name }) =>{ 
    this.setState({ activeItem: name })
      }

  render() {
    
    const { activeItem } = this.state

    return (
      <div className="navbar">
        <Menu pointing>
          <Menu.Item
            as={Link} 
            to="/"
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link} 
            to="/jewelery"
            name='jewelery'
            active={activeItem === 'jewelery'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}