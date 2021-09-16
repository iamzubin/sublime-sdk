import axios from 'axios';

export async function fetchData(requestData: any) {
  try {
    const { data } = await axios.post(requestData.url, requestData.body, { headers: requestData.headers });
    return data;
  } catch (ex) {
    console.log(ex);
  }
}

export const countPerQuery = 999;

export function print(data: any): void {
  console.log(JSON.stringify(data, null, 4));
  return;
}
