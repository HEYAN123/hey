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
        'import/no-named-as-default': 0,
        'import/prefer-default-export': 0,
        "no-console": 0,
        "react/jsx-props-no-spreading": 0,
        "react/forbid-prop-types": 0,
        "prefer-destructuring": 0,
        "class-methods-use-this": 0,
    }
}