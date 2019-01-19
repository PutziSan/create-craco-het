#!/usr/bin/env node

const path = require("path");
const fs = require("fs-extra");

// fs.copySync(path.join(__dirname, "app-template"), process.cwd());

fs.copySync(path.join(__dirname, "app-template"), path.join(process.cwd(), 'tester'));
