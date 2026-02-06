export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Try static asset
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) {
      return response;
    }

    // SPA fallback
    return env.ASSETS.fetch(new Request(`${url.origin}/index.html`));
  }
};
