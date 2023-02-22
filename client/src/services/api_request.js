async function apiRequest({ baseUrl, url, body, get, options }) {
  try {
    // Default options are marked with *
    const base = baseUrl || "http://localhost:8080";
    let config = {};
    config["headers"] = { "Content-Type": "application/json" };
    config["method"] = get ? "GET" : "POST";
    // var credentials = btoa(
    //   process.env.REACT_APP_BASE_AUTH_USERNAME +
    //     ":" +
    //     process.env.REACT_APP_BASE_AUTH_PASSWORD
    // );

    config["headers"] = { ...config.headers, ...options } || config.headers;
    if (body) config["body"] = JSON.stringify(body);

    const request = await fetch(base + "/" + url, config)
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson ? await response.json() : null;

        return data;
      })
      .catch((error) => {
        const e = error.message || "An error has occured";
        console.error("There was an error!", error);
        return { status: false, message: e };
      });

    return request;
  } catch (e) {
    return { status: false, message: e.message || "An error has occured" };
  }
}

export default apiRequest;
