import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
app.set("view engine", "ejs");
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/demo", (req, res) => {
  res.render("demo");
});

app.get("/pricing", (req, res) => {
  res.render("pricing");
});

app.get("/accounting-and-treasury", (req, res) => {
  res.render("accounting-and-treasury");
});

app.get("/automation-and-data-management", (req, res) => {
  res.render("automation-and-data-management");
});

app.get("/budgeting-planning", (req, res) => {
  res.render("budgeting-planning");
});

app.get("/close-and-consolidation", (req, res) => {
  res.render("close-and-consolidation");
});

app.get("/embedded-analytics", (req, res) => {
  res.render("embedded-analytics");
});

app.get("/financial-planning-analysis", (req, res) => {
  res.render("financial-planning-analysis");
});

app.get("/financial-reporting", (req, res) => {
  res.render("financial-reporting");
});

app.get("/longview-tax", (req, res) => {
  res.render("longview-tax");
});

app.get("/operations-reporting-and-analytics", (req, res) => {
  res.render("operations-reporting-and-analytics");
});

app.get("/tax-and-compliance", (req, res) => {
  res.render("tax-and-compliance");
});

app.listen(port, () => {
  console.log(`Running of port ${port}`);
});
