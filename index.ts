import express, { Express } from "express";
import dotenv from "dotenv";
import path from "path";
import Lenis from "@studio-freight/lenis";

dotenv.config();

const app: Express = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.set("port", process.env.PORT || 3000);
const pages = ["home", "pricing", "login", "settings", "logout"];

app.get("/", (req, res) => {
  res.render("landing", {
    title: "Welcome to SyncNote !",
  });
});

app.get("/pricing", (req, res) => {
  res.render("pricing", {
    title: "Welcome to SyncNote !",
  });
});
app.get("/login", (req, res) => {
  res.render("login", {
    title: "Login to SyncNote !",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About SyncNote !",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact SyncNote !",
  });
});

app.listen(app.get("port"), () => {
  console.log("Server started on http://localhost:" + app.get("port"));
});
