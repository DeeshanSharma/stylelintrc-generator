"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getUserInput_1 = __importDefault(require("./getUserInput"));
let stylelintrcConfig = {
    extends: [],
    plugins: [],
    rules: {},
};
const packages = ['stylelint'];
function createConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        const userConfig = yield getUserInput_1.default();
        switch (userConfig.isBem) {
            case true:
                packages.push('stylelint-selector-bem-pattern');
                stylelintrcConfig = Object.assign(Object.assign({}, stylelintrcConfig), { plugins: [
                        ...stylelintrcConfig.plugins,
                        'stylelint-selector-bem-pattern',
                    ] });
                break;
            default:
                break;
        }
        switch (userConfig.isSass) {
            case true:
                packages.push('stylelint-scss');
                stylelintrcConfig = Object.assign(Object.assign({}, stylelintrcConfig), { plugins: [...stylelintrcConfig.plugins, 'stylelint-scss'] });
                break;
            default:
                break;
        }
        switch (userConfig.isPrettier) {
            case true:
                packages.push('stylelint-prettier', 'prettier', 'stylelint-config-prettier');
                stylelintrcConfig = Object.assign(Object.assign({}, stylelintrcConfig), { extends: [
                        ...stylelintrcConfig.extends,
                        'stylelint-prettier/recommended',
                    ], plugins: [...stylelintrcConfig.plugins, 'stylelint-prettier'] });
                break;
            default:
                break;
        }
        return {
            stylelintrcConfig,
            packages,
            packageManager: userConfig.packageManager,
        };
    });
}
exports.default = createConfig;
//# sourceMappingURL=createConfig.js.map