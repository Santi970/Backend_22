import express, {Request, Response} from "express";
import { getTime } from "../lib/utils";
import Persona from "../src/persona";

const p: Persona = new Persona("Santiago", "Cendra");

const app = express();

app.get("/", (req: Request, res: Response) => {
 res.send({
   time: getTime(),
   name: p.getFullName(),
 });
});

const PORT = 8080;
app.listen(PORT, () => {
 console.log(`conectado al puerto: ${PORT}`);
});
 