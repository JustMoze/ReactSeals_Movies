module.exports = function (api) {
    api.cache(true);
    return {
        // presets: ['babel-preset-expo'],
        presets: [
            '@babel/preset-env',
            'module:metro-react-native-babel-preset',
            'module:react-native-dotenv'
        ],
        plugins: [
            [
                '@babel/plugin-transform-spread',
                {
                    loose: true
                }
            ]
        ]
    };
};
