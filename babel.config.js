module.exports = {
  plugins: [
    'macros',
    // used to silence Storybook warnings:
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }]
  ],
  presets: ['@babel/preset-env', '@babel/preset-react']
};
