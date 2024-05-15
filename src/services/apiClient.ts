import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7f76d57da35345929fdcfce91ad381ca",
  },
});


