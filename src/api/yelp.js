import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/",
  headers: {
    Authorization:
      "Bearer V8rjtvX1QQb7WCWL39rJRaxz2avSnYJtOPHjl8rJyMj8SrolLaZkR0nhtTN3AKXEhaKxjfUx2Y5rS0MIWFR_3Tb-XN8typzm2IUC4ldyMovWTGbnfYBou6eGvFtrX3Yx",
  },
});
