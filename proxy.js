const proxy = {
  "/api": {
    "target": "http://0.0.0.89:7300",
    "ws": true
  },
  "/foo": {
    "target": "http://0.0.11.22:8848",
    "ws": true
  }
}
