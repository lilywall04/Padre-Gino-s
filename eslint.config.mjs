import js from "eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

/** atype {import('eslint).linter.Config[]} */
export default [
    js.configs.recommended,
    {
        files: ["**/*js", "**/*.jsx"],
        languageOptions: {
            globals: {...globals.broweser, ...globals.node},
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                }
            }
        }
    },
    prettier
]