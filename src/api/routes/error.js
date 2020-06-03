export default function error (req, res, next) {
  const error = new Error('this is a voluntary error')
  error.code = 'VOLUNTARY'
  next(error)
}
