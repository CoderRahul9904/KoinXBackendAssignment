
import express from "express"
import cors from "cors"
import cryptoRoute from "./route/cryptoRoutes"
import deviationRoute from "./route/deviationRoute"
import dashBoardRoute from "./route/dashboardRoutes"

const app=express()


app.use(express(),cors())


app.use("/koinx/api/v1",cryptoRoute)
app.use("/koinx/api/v1",deviationRoute)
app.use("/koinx/api/v1",dashBoardRoute)
export default app