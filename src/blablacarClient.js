import request from "request-promise";

export default class BlablacarClient {
  constructor(apiKey, locale = "en_US", format = "json") {
    var httpOptions;
    if (!apiKey) {
      throw new Error("API key required");
    }
    this.locale = locale;
    this.httpOptions = {
      qs: {
        key: apiKey
      },
      headers: {
        "User-Agent": "node-blablacar"
      },
      json: format === "json"
    };
  }

  getTripDetails(tripId) {
    return request({
      ...this.httpOptions,
      uri: `https://public-api.blablacar.com/api/v2/trips/${tripId}`
    });
  }

  searchTrip(trip = {}) {
    let params = this.concatUrl(trip);
    return request({
      ...this.httpOptions,
      uri: `https://public-api.blablacar.com/api/v2/trips?${params}`
    });
  }

  concatUrl(trip) {
    let params = "";
    for (const param of Object.keys(trip)) {
      params += `${param}=${trip[param]}&`;
    }
    return params.slice(0, -1);
  }
}
