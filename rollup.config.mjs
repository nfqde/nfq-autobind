/* eslint-disable array-func/prefer-array-from */
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import cleaner from 'rollup-plugin-cleaner';

// eslint-disable-next-line import/extensions
import pkg from './package.json' with { type: 'json' };

const globals = {};

export default [
    {
        external: [...Object.keys({
            ...pkg.devDependencies,
            ...pkg.peerDependencies
        } || {})],
        input: 'src/index.ts',
        output: [
            {
                exports: 'named',
                file: pkg.exports['.'].require,
                format: 'cjs',
                globals,
                interop: 'auto',
                name: pkg.name,
                sourcemap: true
            },
            {
                dir: './dist/esm/',
                exports: 'named',
                format: 'es',
                globals,
                name: pkg.name,
                preserveModules: true,
                sourcemap: true
            }
        ],
        plugins: [
            cleaner({targets: ['./dist/']}),
            resolve({extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']}),
            commonjs({include: ['node_modules/**']}),
            babel({
                babelHelpers: 'bundled',
                extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
            })
        ]
    }
];