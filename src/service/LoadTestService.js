import axios from "axios";

const API_URL = "http://localhost:8080/load-tester/api/v1/start"

class LoadTestService {
  startTest(request) {
    return axios.post(API_URL, {
      stepConfig: request.stepConfig,
      url: request.url,
      testBody :request.testBody
    });
  }
}

export default new LoadTestService();