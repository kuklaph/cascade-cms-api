export default async function withFetch(requestParams) {
  const { url, data, headers, method } = requestParams;
  const response = await fetch(url, {
    method,
    headers,
    body: data,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return await response.json();
  }
}
