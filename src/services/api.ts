class FetchError extends Error {
  constructor(message: string, public status: number) {
    super(message)
  }
}

const api = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then(async (res) => {
    const body = await res.json()

    if (!res.ok) {
      throw new FetchError(res.statusText || body.message, res.status)
    }

    return body
  })

export { FetchError, api }
