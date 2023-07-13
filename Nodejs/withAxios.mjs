import axios from "axios";

export default async function withAxios(requestParams) {
  const request = await axios(requestParams);
  return request.data;
}
