// import React from "react";
import axios from "axios";

export default axios.create({
  baseURL: "https://www.omdbapi.com/",
});
// https added in http.
