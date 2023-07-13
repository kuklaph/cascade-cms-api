export default async function withFetch(requestParams) {
  const request = await fetch(requestParams);
  if (!request.ok) {
    throw new Error(`HTTP error! status: ${request.status}`);
  } else {
    return await request.json();
  }
}
