
import github from './externalApis/github'
import codewars from './externalApis/codewars'
import stackoverflow from './externalApis/stackoverflow'

export default function error (req, res) {
  // request : GET https://api.github.com/users/gui3
  const data = {
    github,
    codewars,
    stackoverflow
  }
  res.status(200).json(data)
}
