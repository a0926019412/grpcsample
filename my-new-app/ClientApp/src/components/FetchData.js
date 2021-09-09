import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts : "", loading: true };
  }

  componentDidMount() {
    this.getTestData();
  }

  static renderForecastsTable(forecasts) {
    return (
      <div>{forecasts}</div>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        {contents}
      </div>
    );
  }

  async getTestData() {
    const response = await fetch('test');
    const data = await response.text();
    this.setState({ forecasts: data, loading: false });
  }
}
