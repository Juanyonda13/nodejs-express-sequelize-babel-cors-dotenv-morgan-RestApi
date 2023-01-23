import Express from "express"
import morgan from "morgan"
import usersRoutes from "./routes/users.routes"
import cors from "cors"

const app=Express()

app.use(cors())

app.set("port",4000)

app.use(morgan("dev"))
app.use(Express.json())

app.use("/api/users",usersRoutes)

export default app