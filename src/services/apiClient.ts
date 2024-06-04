import axios from "axios";

export default axios.create({
  baseURL: "https://rawg-proxy.onrender.com",
  params: {
    key: "7f76d57da35345929fdcfce91ad381ca",
  },
});


