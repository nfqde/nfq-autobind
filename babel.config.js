module.exports = {
    comments: false,
    env: {test: {plugins: ['istanbul']}},
    plugins: [
        ['@babel/plugin-proposal-decorators', {version: '2023-11'}],
        ['@babel/plugin-proposal-class-properties', {loose: false}],
        '@babel/plugin-transform-class-static-block',
        '@babel/plugin-transform-typescript',
        '@babel/plugin-syntax-import-assertions',
        ['styled-components', {
            fileName: true,
            preprocess: false,
            pure: true,
            ssr: true
        }]
    ],
    presets: [
        ['@babel/preset-env', {modules: false}],
        ['@babel/preset-react'],
        ['@babel/preset-typescript']
    ]
};