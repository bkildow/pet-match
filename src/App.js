import React, { Component } from "react";
import get from "lodash/get";
import Details from "./components/Details";
import "./App.css";
import Zipcode from "./components/Zipcode";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      photo: null,
      nickname: null,
      description: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const key = process.env.REACT_APP_API_KEY;
    let url = `/pet.getRandom?key=${key}&format=json&output=basic&animal=dog&location=43081`;
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          const data = result.petfinder.pet;
          this.setState({
            isLoaded: true,
            photo: get(data, 'media.photos.photo[3]["$t"]', null),
            nickname: get(data, 'name["$t"]', null),
            description: get(data, 'description["$t"]', null)
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, nickname, photo, description } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Pet Match</h1>
          </header>
          <Zipcode />
          <Details
            nickname={nickname}
            photo={photo}
            description={description}
          />
        </div>
      );
    }
  }
}

export default App;
