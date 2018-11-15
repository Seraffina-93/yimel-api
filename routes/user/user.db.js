const User = require('../../models/user')

const insert = async (data) => {
  try {
    const user = new User(data)
    const userCreated = await user.save()
    return userCreated
  } catch(e) {
    throw e
  }
}

const findByEmail = async (email) => {
  try {
    const query = { email }
    const data = await User.findOne(query)
    return data
  } catch(e) {
    throw e
  }
}

module.exports = {
  insert,
  findByEmail,
}