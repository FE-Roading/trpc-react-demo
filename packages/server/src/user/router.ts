import { z } from "zod"

import { router, publicProcedure } from "../trpc"

import { users } from "./db"
import { User } from "./types"

export const userRouter = router({
  getUsers: publicProcedure.query(() => users),

  getUserById: publicProcedure.input((val: unknown) => {
    if (typeof val != 'string') throw new Error(`Invalid input: ${typeof val }`)

    return val
  }).query((req) => {
    const { input } = req 
    const user = users.find(item => item.id == input)

    return user
  }),

  createUser: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation((req) => {
      const { input } = req

      const user: User = {
        id: `${ Math.random() }`,
        name: input.name
      }

      users.push(user)
      return user
    }),

})