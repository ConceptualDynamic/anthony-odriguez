module.exports = {
  responseOk (res, body) {
    return res.status(200).send(body)
  },
  responseCreated (res, body) {
    return res.status(201).send(body)
  },
  responseNoContent (res) {
    return res.sendStatus(204)
  },
  responseBadRequest (res, body) {
    return res.status(400).send(body)
  },
  responseUnauthorized (res, body) {
    return res.status(401).send(body ?? { message: 'Unauthorized Access' })
  },
  responseForbidden (res, body) {
    return res.status(403).send(body ?? { message: 'Access Forbidden' })
  },
  responseNotFound (res) {
    return res.status(404).send({ message: 'Not Found' })
  },
  responseMethodNotAllowed (res) {
    return res.status(405).send({ message: 'Method Not Allowed' })
  },
  responseServerError (res, body) {
    return res.status(500).send(body)
  },
  responseException (res, e) {
    return res.status(e.status || 500).send({ message: e.message })
  }
}