var fetch = require("google/appengine/api/urlfetch").fetch;

/**
 * Perform an HTTP request.
 */
exports.request = function(env) {
    var method = env.method || "GET";
        uri = env.uri || (env.scheme + "://" + env.serverName + ":" + env.serverPort + env.pathInfo + (env.queryString ? "?" + env.queryString : ""));

    var response = fetch(uri, env.body, method, env.headers);

    return {
        status: response.statusCode,
        headers: response.headers,
        body: [response.content]
    }
}

exports.GET = function(env) {
    env.method = "GET";
    return exports.request(env);
}

exports.POST = function(env) {
    env.method = "POST";
    return exports.request(env);
}
