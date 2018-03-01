import React, { Component } from "react";
import get from "lodash/get";
import Details from "./components/Details";
import "./App.css";
import Zipcode from "./components/Zipcode";
import SubmitButton from "./components/SubmitButton";
import AnimalSelect from "./components/AnimalSelect";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      photo: null,
      nickname: null,
      description: null,
      zip: null,
      animal: "dog"
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { zip, animal } = this.state;
    const key = process.env.REACT_APP_API_KEY;
    const location = zip ? `&location=${zip}` : "";
    let url = `/pet.getRandom?key=${key}&format=json&output=basic&animal=${animal}${location}`;
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

  handleZipChange = zip => {
    this.setState({ zip });
  };

  handleSubmitButtonClick = () => {
    this.fetchData();
  };

  handleAnimalOnChange = animal => {
    this.setState({ animal });
  };

  render() {
    const { error, isLoaded, nickname, photo, description } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App container">
          <div className="row">
            <div className="column-12">
              <form>
                <Zipcode
                  handleZipChange={this.handleZipChange}
                  value={this.state.zip}
                />
                <AnimalSelect
                  value={this.state.animal}
                  onChange={this.handleAnimalOnChange}
                />
                <SubmitButton
                  handleSubmitButtonClick={this.handleSubmitButtonClick}
                />
              </form>
              <Details
                nickname={nickname}
                photo={photo}
                description={description}
              />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
