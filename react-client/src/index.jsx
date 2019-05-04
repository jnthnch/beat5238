import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import NameForm from './components/NameForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render() {
    return (<div>
      <h1>Weekly Sports Picks</h1>
      <NameForm />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));