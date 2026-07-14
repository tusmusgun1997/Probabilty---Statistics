// Thin wrapper around the Express API. Both endpoints are served from the same
// origin in production; in dev, Vite proxies /api to the Express server.

async function get(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Request failed (${res.status}): ${url}`);
  return res.json();
}

export const getCourse = () => get("/api/course");
export const getTopic = (topicId) => get(`/api/topics/${topicId}`);
