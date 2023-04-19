export const useFecht = () => {
  const urlBase = 'http://localhost:3000';
  const f = (method: string) => (body: any, url: string) => fetch(urlBase + url, {
    method,
    body: body && JSON.stringify(body),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      //'Authorization': 'Bearer ' + token,
    },
  });

  return {
    get: f('GET'),
    post: f('POST')
  }
}