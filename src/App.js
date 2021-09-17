import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {

  constructor()
  {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  changeHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">FivePoints</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Web Developpement
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">HTML</a>
                  <a className="dropdown-item" href="#">CSS</a>
                  <a className="dropdown-item" href="#">JavaScript</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      <div className="container">
        <div className="row">
          <div className="offset-sm-3 col-sm-6">
              <div className="card mt-5">
              <div className="card-header">
                  <h5>Login</h5>
              </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.changeHandler}/>
                          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.changeHandler}/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                    </form>
                </div>
              </div>
          </div>
        </div>
    
      </div>
      </div>
    );
  }
}
export default App;
