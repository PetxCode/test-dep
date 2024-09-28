"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const app = (0, express_1.default)();
const router = express_1.default.Router();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
router.get("/", (req, res) => {
    res.send("App is running..");
});
router.get("/hello", (req, res) => {
    res.send("Hello World");
});
app.listen(1122, () => {
    console.log("server connected");
});
app.use("/.netlify/functions/app", router);
// module.exports.handler = serverless(app);
module.exports.handler = (0, serverless_http_1.default)(app);
