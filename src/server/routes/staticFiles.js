import express from "express";

export const staticFiles = express.Router()
	.use(express.static(process.cwd() + "/public"));
