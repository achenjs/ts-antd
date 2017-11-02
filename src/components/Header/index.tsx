import * as React from 'react';
import { Icon } from 'antd-mobile';
import './style.scss';

class Header extends React.Component<{}, {}> {
  render () {
    return (
      <div className="common-header clearfix">
        <div className="header-city fl">
          <span>北京</span>
          <Icon className="icon-down" type="down" size="md" />
        </div>
        <div className="header-user fr">
          <i className="icon-user">{}</i>
        </div>
        <div className="header-search">
          <div className="search-container">
            <input />
            <Icon className="icon-search" type="search" size="md" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;