import babel from 'rollup-plugin-babel'

export default {
    entry: 'src/index.js',
    dest: 'index.js',
    format: 'umd',
    moduleName: 'cookie',
    plugins: [
        babel({presets: ['es2015-rollup']})
    ]
}
