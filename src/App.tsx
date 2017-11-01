import * as React from 'react';
export interface State { 
  initLoading: boolean; 
}
class App extends React.Component<{}, State> {
  interval: number;
  state = {
    initLoading: false
  };

  componentWillMount() {
    this.interval = window.setInterval(() => {
      this.setState({ 
        initLoading: true 
      });
    }, 1000);
  }

  render() {
    const { initLoading } = this.state;
    return (
      <div className="App">
        {
          initLoading ?
          this.props.children
          : <div>正在加载中...</div>
        }
      </div>
    );
  }
}

export default App;
