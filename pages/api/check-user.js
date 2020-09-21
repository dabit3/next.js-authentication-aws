import { withSSRContext } from 'aws-amplify'

export default async (req, res) => {
  const { Auth } = withSSRContext({ req })
  try {
    // get user session
    const user = await Auth.currentAuthenticatedUser()

    // return user
    res.json({ user })
  } catch (err) {
    res.json({ user: null })
  }
}