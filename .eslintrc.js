module.exports = {
    root: true, 
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
	},
	extends: 'airbnb',
    rules: {
        "indent": ["error", 2],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "no-console": "error",
        "arrow-parens": 0,
        "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    }
}