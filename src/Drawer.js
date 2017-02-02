import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-forward';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

export default class DrawerMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <AppBar
    		title="Title"
    		showMenuIconButton={false}
    		iconElementRight={<IconButton><MenuIcon /></IconButton>}
    		onRightIconButtonTouchTap={this.handleToggle.bind(this)}
    		className="main-nav"
  		/>
        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          openSecondary={true}
          onRequestChange={(open) => this.setState({open})}
        >
        	<AppBar title="Menu"
    			showMenuIconButton={false}
    			iconElementRight={<IconButton><NavigationClose /></IconButton>}
        		onRightIconButtonTouchTap={this.handleToggle.bind(this)}
        	/>
        	<MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item</MenuItem>
        	<MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}