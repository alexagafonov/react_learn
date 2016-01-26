module.exports = {
    "extends": "airbnb",
    "ecmaFeatures": {
        "arrowFunctions": true,
        "classes": true,
        "jsx": true,
        "modules": true
    },
    "env": {
        "es6": true
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "strict": 0,
        "no-param-reassign": 0,
        "react/jsx-indent": 2,
        "react/jsx-no-bind": [2, {
            "ignoreRefs": true,
            "allowArrowFunctions": true,
            "allowBind": true
        }]
    }
};
