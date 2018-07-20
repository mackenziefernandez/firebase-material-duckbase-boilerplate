import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import AppRoutes from '../routes';
import CustomMenuComponent from '../components/helpers/customMenu';
import ConfirmationDialog from '../containers/dialogs/confirmationDialogContainer';
import BellIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as Colors from '../constants/colors';

class App extends Component {
  static propTypes = {
    handleDrawerToggle: PropTypes.func.isRequired,
    userId: PropTypes.string,
    userEmail: PropTypes.string
  };

  navigationDrawerOptions = {
    example: { icon: <BellIcon />, title: 'Example', to: '/example' }
  }

  buildMenuItem = (option) => {
    return (
      <Link to={option.to}><MenuItem onClick={() => this.props.handleDrawerToggle()}>{option.icon} {option.title}</MenuItem></Link>
    );
  }

  getAppHeader() {
    const drawerOptions = this.props.userId ? (
      <div>
        {this.buildMenuItem(this.navigationDrawerOptions.example)}
      </div>
    ) : (
        <div>
          {this.buildMenuItem(this.navigationDrawerOptions.example)}
        </div>
      );

    return (
      <AppBar position='static' color='primary'>
        <Toolbar>
          <IconButton
            label='Open Drawer'
            onClick={this.props.handleDrawerToggle}>
            <BellIcon nativeColor={Colors.WHITE} />
          </IconButton>
          <Drawer
            open={this.props.drawerOpen}
            onClose={this.props.handleDrawerToggle}>
            <List className='navigationDrawerList'>{drawerOptions}</List>
          </Drawer>
          <Typography className='headerTitle' variant='h6' color='inherit'>
            <Link to='/'>App Name</Link>
          </Typography>
          {this.props.userId ? (
            <div className='appHeaderRight'>
              <div className='userEmail'>{this.props.userEmail}</div>
              <CustomMenuComponent icon={<ExpandMoreIcon nativeColor={Colors.WHITE} />} options={[{ primaryText: 'Logout', onClick: this.props.logoutUser }]} />
            </div>
          ) : (
              <div className='appHeaderRight'>
                <Button color='inherit' className='loginButton' href='/#/login'>Login</Button>
              </div>
            )}
        </Toolbar>
      </AppBar>
    );
  }

  render() {
    return (
      <div className='app'>
        <ConfirmationDialog />
        {this.getAppHeader()}
        <div className='appContentContainer'>
          <AppRoutes />
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
