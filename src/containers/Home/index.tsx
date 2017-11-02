import * as React from 'react';
import Header from '../../components/Header';
import Demand from './subpage/demand';

class Home extends React.Component {
  render () {
    return (
      <div className="Home">
        <Header />
        <Demand />
      </div>
    );
  }
}

export default Home;