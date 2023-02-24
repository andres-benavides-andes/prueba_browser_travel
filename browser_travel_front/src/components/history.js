import React from "react";
import DataTable from "react-data-table-component";
import { getHistorics } from "../services/historyService";

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const { data } = await getHistorics();

    this.setState({
      data: data,
    });
  }

  render() {
    const columns = [
      {
        name: "Ciudad",
        selector: (row) => row.city,
        sortable: true,
      },
      {
        name: "Humedad",
        selector: (row) => row.humidity,
      },
      {
        name: "Registrado",
        selector: (row) => row.created_at,
        sortable: true,
      },
    ];

    return <DataTable columns={columns} data={this.state.data} pagination />;
  }
}

export default History;
