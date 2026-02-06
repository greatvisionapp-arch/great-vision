// worker.js
var worker_default = {
  fetch(request, env) {
    return env.ASSETS.fetch(request);
  }
};
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map
