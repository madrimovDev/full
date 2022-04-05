"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const upload_routes_1 = __importDefault(require("./routes/upload.routes"));
const upload_1 = __importDefault(require("./middlewares/upload"));
const app = (0, express_1.default)();
const PORT = 5555;
// * express config */
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.static('puplic'));
// * Routes */
app.use('/api', upload_1.default, upload_routes_1.default);
app.listen(PORT, () => {
    console.log('Server run on http://localhost:' + PORT);
});
