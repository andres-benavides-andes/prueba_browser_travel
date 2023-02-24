import React from "react";
import Select from "react-select";
import { getCities } from "../services/cityService";
import { saveHistory } from "../services/historyService";

//import { getWeatherMap } from "../services/openWeatherService";
import Map from "./map";

class SelectCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      lat: 4.747286,
      lon: -74.114399,
      humidity: "",
      allCities: [],
      showAll: false,
      currentCity: "",
      showSuccess: false,
      showError: false,
      disableSave: false,
    };
  }

  async componentDidMount() {
    const { data } = await getCities();
    const cityOptions = data.map((city) => {
      return { value: city, label: city.name };
    });
    this.setState({
      cities: cityOptions,
      allCities: data,
    });
  }

  handleChange = async (selectedCity) => {
    let city = selectedCity.value;
    this.setState({
      lat: city.lat,
      lon: city.lon,
      humidity: city.humidity,
      showAll: false,
      currentCity: city,
      disableSave: false,
    });
  };

  showAllCities = () => {
    this.setState({
      showAll: true,
      disableSave: false,
    });
  };

  saveHistory = async () => {
    let params = {};
    if (this.state.showAll === false) {
      let current = {
        city_id: this.state.currentCity.id,
        humidity: this.state.currentCity.humidity,
      };
      params["records"] = [current];
    } else {
      let citiesParams = this.state.allCities.map((city) => {
        return { city_id: city.id, humidity: city.humidity };
      });
      params["records"] = citiesParams;
    }
    const response = await saveHistory(params);
    console.log(response);
    this.setState({
      showSuccess: response,
      showError: !response,
      disableSave: true,
    });
  };
  handleCloseModal = () => {
    this.setState({
      showSuccess: false,
      showError: false,
    });
  };

  render() {
    const { cities } = this.state;
    const { showSuccess } = this.state;
    const { showError } = this.state;

    let textAlert = ""
    let typeAlert = ""
    let showAlert= ""
    if(showSuccess){
      textAlert =  "¡Se guardo el registro en el historial!";
      typeAlert = "success";
      showAlert = "show";
    }else if(showError){
      textAlert =  "¡Error al guadar en el historial!";
      typeAlert = "danger";
      showAlert = "show";
    }

    return (
      <div className="selectCity">
        <div
          role="alert"
          className={`alert alert-${typeAlert} alert-dismissible fade ${showAlert}`}
        >
          <strong>{textAlert}</strong>
          <button
            type="button"
            area-label="Close"
            className="btn-close"
            data-dismiss="alert"
            onClick={this.handleCloseModal}
          >
            &times;
          </button>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className="row form-group">
              <div className="col-md-12">
                <label>Seleccione una ciudad</label>
                <Select options={cities} onChange={this.handleChange} />
              </div>
            </div>
            <div className="row mt-3 d-flex justify-content-center">
              <div className="col-md-8">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.showAllCities}
                >
                  Ver todas las ciudades
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-9">
          <div className="row mt-4">
              <div className="col-md-6">
                <button
                  type="button"
                  disabled={this.state.disableSave}
                  className="btn btn-success"
                  onClick={this.saveHistory}
                >
                  Guardar historial
                </button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <Map
                  lat={this.state.lat}
                  lon={this.state.lon}
                  humidity={this.state.humidity}
                  cities={this.state.allCities}
                  showAll={this.state.showAll}
                />
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default SelectCity;
