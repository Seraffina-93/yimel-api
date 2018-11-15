const User = require('../../models/user')

const findUser = async (data) => {
  try {
    const query = data
    const user = await User.findOne(query)

    return user
  } catch(e) {
    throw e
  }
}

module.exports = {
  findUser,
}