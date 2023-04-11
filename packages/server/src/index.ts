import cros from "cors"
import express from "express"
import * as trpcExpress from "@trpc/server/adapters/express"

import { appRouter } from "./router"
import { createContext } from "./context"

const app = express()

app.use(cros())
app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext
  })
)

app.listen(4000)

export type { AppRouter } from "./router"