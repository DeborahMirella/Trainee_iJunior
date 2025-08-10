import dotenv from "dotenv";
dotenv.config();

import { app } from "./config/expressConfig";

const PORT = Number(process.env.PORT) || 3001;

app.listen(PORT, () => {
  console.log(`Servidor de pé, na presença do Senhor, na porta: ${PORT}`);
});
