import request from "request-promise";

export default class BlablacarClient {
  constructor(apiKey) {
    var httpOptions;
    if (!apiKey) {
      throw new Error("API key required");
    }
    this.httpOptions = {
      qs: {
        key: apiKey
      },
      headers: {
        "User-Agent": "node-blablacar"
      }
    };
  }

  getTripDetails(tripDetails = {}) {
    return request({
      ...this.httpOptions,
      json: tripDetails._format === "json",
      uri: `https://public-api.blablacar.com/api/v2/trips/${tripDetails.Trip_ID}?locale=${tripDetails.locale}&_format=${tripDetails.format}`
    });
  }

  searchTrip(trip = {}) {
    let params = this.concatUrl(trip);
    return request({
      ...this.httpOptions,
      json: trip._format === "json",
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
