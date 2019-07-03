import React from 'react';
import $ from 'jquery';


class UsernameDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/users',
      success: (data) => {
        this.setState({
          users: data,
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render() {
    return (
      <div>
        <h1 className="header">
          Beat5238
        </h1>
        <div className="UsernameDropdown">
          <form>
            <label>
              <h1 id="UsernameDropdownHeader">Select Your Username</h1>
              <select className="custom-select">
                <option value=""></option>
                {this.state.users.map((user, idx) => {
                  return <option key={idx} value={user.username}>{user.username}</option>
                })}
              </select>
            </label>
            <input type="submit" className="btn btn-danger" value="Select" />
          </form >
        </div>
      </div>
    )
  }

}

// class UsernameDropdown extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { currentUser: '' }

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ currentUser: event.target.value });
//   }

//   render() {
//     const users = this.props.users;
//     return (
//       <div>
//         {/* <form onSubmit={(e) => this.props.handleUsernameSelection(e, this.state.currentUser)}> */}
//         <form onSubmit={(e) => {
//           e.preventDefault();
//           console.log(this.state.currentUser)
//         }}>
//           <label>
//             Select Username
//             <select value={this.state.value} className="custom-select" onChange={(e) => this.handleChange(e)}>
//               <option value=""></option>
//               {users.map((user, idx) => {
//                 return <option key={idx} value={user.username}>{user.username}</option>
//               })}
//             </select>
//           </label>
//           <input type="submit" className="btn btn-primary" value="Select" />
//         </form>
//       </div>
//     )
//   }
// }

export default UsernameDropdown;