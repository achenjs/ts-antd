import * as React from 'react';
import './App.css';
import { Button } from 'antd-mobile';

class App extends React.Component {
  constructor (props: {}, context: {}) {
    super(props, context);
    this.state = {
      initLoading: [false]
    };
  }
  onPanelChange = (value?: {}, mode?: {}) => {
    console.log(value, mode);
  }
  render() {
    // const { initLoading } = this.props;
    return (
      <div className="App">
        <Button>111</Button>
        {
          this.props.children
        }
      </div>
    );
  }
}

export default App;
