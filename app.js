// Utilities
const path = require("path");
const favicon = require("serve-favicon");

// Express
const express = require("express");

// Routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// Controllers
const errorController = require("./controllers/pagenotfound");

const app = express();

app.set("view engine", "ejs");

app.set("views", "views"); // Not actually needed as views is the default but set it for visibility

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);

app.use("/", errorController.get404);

app.listen(3000);
