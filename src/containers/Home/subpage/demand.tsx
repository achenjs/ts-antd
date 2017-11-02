import * as React from 'react';
import { SegmentedControl } from 'antd-mobile';

import './style.scss';

class Demand extends React.Component {
  render () {
    return (
      <div className="common-demand">
        <SegmentedControl 
          values={['找宣讲场地', '发布宣讲需求']}
          tintColor={'#ffffff'}
          style={{ height: '.8rem', color: '#333333' }}
        />
      </div>
    );
  }
} 

export default Demand;