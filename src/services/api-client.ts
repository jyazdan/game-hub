import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'd0c17d28ca644ab193a834a595a42865'
  }
})