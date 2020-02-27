const getQuery = async (url, params = {}) => {
  const apiBase = `${window.location.protocol}//${window.location.host}/api`;
  let paramsForQuery = '';

  for (let prop in params) {
    paramsForQuery += `${prop}=${params[prop]}&`
  }
  if (paramsForQuery.length > 0) {
    paramsForQuery = `?${paramsForQuery.slice(0, -1)}`;
  }

  try {
    const res = await fetch(`${apiBase}${url}${paramsForQuery}`);
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export { getQuery };
