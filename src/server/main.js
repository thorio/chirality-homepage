import express from "express";
import { api } from "./routes/api";
import { staticFiles } from "./routes/staticFiles";
import { getConfig } from "./services/configurationService";

const port = getConfig().port;

express()
	.use("/api", api)
	.get("/logout", (req, res) => res.redirect(getConfig().logoutUrl))
	.use(staticFiles)
	.listen(port, () => {
		console.log(`started listening on 0.0.0.0:${port}`);
	});
