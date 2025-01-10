
import express from "express"
import cors from "cors"
import cryptoRoute from "./route/cryptoRoutes"
import deviationRoute from "./route/deviationRoute"

const app=express()


app.use(express(),cors())


app.use("/koinx/api/v1",cryptoRoute)
app.use("/koinx/api/v1",deviationRoute)

export default app