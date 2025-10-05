"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const srcDir = path_1.default.join(__dirname);
function listFiles(dir) {
    const items = fs_1.default.readdirSync(dir, { withFileTypes: true });
    items.forEach(item => {
        const fullPath = path_1.default.join(dir, item.name);
        console.log(fullPath);
        if (item.isDirectory()) {
            listFiles(fullPath);
        }
    });
}
listFiles(srcDir);
//# sourceMappingURL=checkFiles.js.map