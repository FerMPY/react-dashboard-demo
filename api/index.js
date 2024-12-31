import jsonServer from "json-server";
import path from "path";

const server = jsonServer.create();
// eslint-disable-next-line no-undef
const router = jsonServer.router(path.join(process.cwd(), "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", router);

export default server;
