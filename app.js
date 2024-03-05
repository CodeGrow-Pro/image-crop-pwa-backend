const express = require("express")
const bodyParser = require("body-parser");
const cors = require('cors');
const db = require("./model")

const initDb = require("./services/initDb")

const UserRouter = require("./routes/user")
const ReportRouter = require("./routes/report")
const CropRouter = require("./routes/crop")


const app = express()
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }))
app.use(cors());

app.use("/image_data", express.static("image_data"))
app.use("/reports_data", express.static("reports_data"))

db.sequelize.sync({
    force: true
}).then(() => {
    console.log("Drop and resync db");
    initDb();
})

app.use('/api/users', UserRouter);
app.use('/api/reports', ReportRouter);
app.use('/api/crops', CropRouter);

app.listen(8000, () => {
    console.log("Server is running");
})

