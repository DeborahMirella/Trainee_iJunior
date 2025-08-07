import { app } from "./config/expressConfig";
import dotenv from "dotenv";

dotenv.config();

app.listen(process.env.PORT, () => {
  //PORT = "3030"
  console.log(`Servidor rosteado na porta: ${process.env.PORT}...`);
});
