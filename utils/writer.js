// Represents a response payload with a code and payload data
var ResponsePayload = function(code, payload) {
  this.code = code;
  this.payload = payload;
}

// Function to create a ResponsePayload object with a given code and payload
exports.respondWithCode = function(code, payload) {
  return new ResponsePayload(code, payload);
}

// Function to write JSON response to the provided HTTP response object
var writeJson = exports.writeJson = function(response, arg1, arg2) {
  var code;
  var payload;

  // Check if arg1 is an instance of ResponsePayload and recursively call writeJson
  if (arg1 && arg1 instanceof ResponsePayload) {
    writeJson(response, arg1.payload, arg1.code);
    return;
  }

  // Determine code and payload based on arguments
  if (arg2 && Number.isInteger(arg2)) {
    code = arg2;
  } else {
    if (arg1 && Number.isInteger(arg1)) {
      code = arg1;
    }
  }
  if (code && arg1) {
    payload = arg1;
  } else if (arg1) {
    payload = arg1;
  }

  // Default response code to 200 if not provided
  if (!code) {
    code = 200;
  }

  // Convert payload to JSON string if it's an object
  if (typeof payload === 'object') {
    payload = JSON.stringify(payload, null, 2);
  }

  // Set HTTP response headers and end the response
  response.writeHead(code, { 'Content-Type': 'application/json' });
  response.end(payload);
}
