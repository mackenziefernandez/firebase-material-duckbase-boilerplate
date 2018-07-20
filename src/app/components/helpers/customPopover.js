import React from 'react';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import FilterIcon from '@material-ui/icons/FilterList';

import './customPopover.scss';

export default class CustomPopover extends React.Component {
  static propTypes = {
    icon: PropTypes.element,
    badgeContent: PropTypes.number
  }

  constructor(props) {
    super(props);
    this.state = { anchorEl: null };
  }

  openFilterPopover = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({ anchorEl: event.currentTarget });
  }

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  }

  render() {
    const iconButton = (
      <IconButton onClick={this.openFilterPopover}>
        {this.props.icon ? this.props.icon : <FilterIcon />}
      </IconButton>
    );

    return (
      <div className='customPopover'>
        {this.props.badgeContent ? <Badge classes={{ badge: 'customPopoverBadge' }} color='secondary' badgeContent={this.props.badgeContent}>
          {iconButton}
        </Badge> : iconButton}
        <Popover open={!!this.state.anchorEl}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          onClose={this.handlePopoverClose}
        >
          <div className='customPopoverContent'>{this.props.children}</div>
        </Popover>
      </div>
    );
  }
}
