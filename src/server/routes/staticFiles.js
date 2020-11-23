import express from "express";

console.log(process.cwd());

export const staticFiles = express.Router()
	.use(express.static(process.cwd() + "/public"));
