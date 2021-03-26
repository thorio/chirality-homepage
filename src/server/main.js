import { GracefulShutdownManager } from "@moebius/http-graceful-shutdown";
import express from "express";
import { api } from "./routes/api";
import { staticFiles } from "./routes/staticFiles";
import { getConfig } from "./services/configurationService";

const port = getConfig().port;

const server = express()
	.use("/api", api)
	.get("/logout", (req, res) => res.redirect(getConfig().logoutUrl))
	.use(staticFiles)
	.listen(port, () => {
		console.log(`listening on 0.0.0.0:${port}`);
	});

const shutdownManager = new GracefulShutdownManager(server);

process.on("SIGTERM", () => {
	console.log("stopping server");
	shutdownManager.terminate(() => {
		console.log("server stopped");
	});
});
