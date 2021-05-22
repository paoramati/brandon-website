export default function healthcheck(req, res) {
  return res.status(200).json( { test: 'Hello!' })
}