import express from "express";
import * as servicesService from "../services/servicesService";
import * as userService from "../services/userService";

export const api = express.Router()
	.get("/user", (req, res) => {
		res.send(userService.getUser(req));
	})
	.get("/services", (req, res) => {
		let user = userService.getUser(req);
		res.send(servicesService.getServices(user));
	});
