import { trpc } from './trpc'

export const fetchUser =async () => {
  const user = await trpc.user.getUserById.query('1')

  console.log("fetchUser: ", user)
}
