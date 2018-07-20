import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

export default class MaterialMenu extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.element,
    options: PropTypes.array.isRequired,
    transformOrigin: PropTypes.object,
    triggerEl: PropTypes.element
  };

  constructor(props) {
    super(props);
    this.state = { anchorEl: null };
  }

  clickMenuOption = (option) => {
    if (option.onClick) {
      option.onClick(option);
      this.handleClose();
    }
  }

  handleClose = () => this.setState({ anchorEl: null });

  getMenuItem(option, index) {
    if (option === 'divider') {
      return <Divider key={index} />;
    }

    const secondaryIcon = option.secondaryIcon || (option.children && <ChevronRight />);
    const menuItem = (
      <MenuItem className={option.className} onClick={() => this.clickMenuOption(option)} key={index} disabled={option.disabled}>
        {option.icon && <ListItemIcon>{option.icon}</ListItemIcon>}
        <ListItemText primary={option.primaryText} />
        {secondaryIcon}
      </MenuItem>
    );

    return option.children ? <MaterialMenu key={index} triggerEl={menuItem} options={option.children} transformOrigin={{ horizontal: 'right', vertical: 'center' }} /> : menuItem;
  }

  onTriggerClick = (e) => this.setState({ anchorEl: this.state.anchorEl ? null : e.currentTarget });

  render() {
    const { className, icon = <MenuIcon color='primary' />, options, transformOrigin } = this.props;
    const menuItems = options.map((option, index) => this.getMenuItem(option, index));
    const triggerEl = this.props.triggerEl ? <div className={className} onClick={this.onTriggerClick}>{this.props.triggerEl}</div> : <IconButton className={className} onClick={this.onTriggerClick}>{icon}</IconButton>;

    return (
      <div>
        {triggerEl}
        <Menu className={classnames('customMenu', className)} open={!!this.state.anchorEl} anchorEl={this.state.anchorEl} onClose={this.handleClose} transformOrigin={transformOrigin}>
          {menuItems}
        </Menu>
      </div>
    );
  }
}
