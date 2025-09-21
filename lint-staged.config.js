module.exports = {
    '**/*.(ts|tsx|js)': () => ['yarn prettier:write', 'yarn lint:fix'],
};