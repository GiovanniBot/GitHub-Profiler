const api = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json())

export { api }
