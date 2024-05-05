import { app } from "./app";

const port = process.env.PORT || "8000";

console.log(process.env.PORT)

app.listen(port, () => console.log("Server online"));