import React from 'react';
import Display from './Display';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      username: '',
      password: '',
      
    };

    this.create = this.create.bind(this);
   
    this.handleChange = this.handleChange.bind(this);
  }
  create(e) {
    // add entity - POST
    e.preventDefault();

    // creates entity
    fetch("https://login38.p.rapidapi.com/ygnhrth535gfdv", {
      "method": "POST",
      "headers": {
    
        "content-type": "application.json",
    "useragent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36",
    "x-csrftoken": "12",
    "accept": "*/*",
    "accept-language": "gzip, deflate",
    "cookie": "csrftoken=12",
    "x-rapidapi-key": "1942f81280msh1031e37df8e0410p154a87jsn2a9072df4ef7",
    "x-rapidapi-host": "login38.p.rapidapi.com",
    "useQueryString": true
      },
      "body": JSON.stringify({
        username: this.state.name,
        password: this.state.notes
      })
    })
    .then(response => response.json())
    .then(response => {
        this.setState({
            friends: response
          })
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    });
  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }

  render() {
    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="display-4 text-center">Make An API Call in React</h1>
              <form className="d-flex flex-column">
                <legend className="text-center">Add-Update-Delete Friend</legend>
                <label htmlFor="username">
                  username:
                  <input
                    name="username"
                    id="username"
                    type="text"
                    className="form-control"
                    value={this.state.username}
                    onChange={(e) => this.handleChange({ username: e.target.value })}
                    required
                    />
                </label>
                <label htmlFor="password">
                  password:
                  <input
                    name="password"
                    id="password"
                    type="test"
                    className="form-control"
                    value={this.state.password}
                    onChange={(e) => this.handleChange({ password: e.target.value })}
                    required
                    />
                </label>
                
                <button className="btn btn-primary" type='button' onClick={(e) => this.create(e)}>
                  Add
                </button>
                
                <div><Display/></div> 
              </form>
            
            </div>
          </div>
        </div>
    );
  }
}

export default App;