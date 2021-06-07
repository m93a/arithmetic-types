import typescript from 'rollup-plugin-typescript2'

export default {
    input: 'src/index.ts',
    output: {
        name: 'ArithmeticTypes',
        file: 'lib/index.js',
        format: 'es',
    },
    plugins: [
        typescript(),
    ],
    onwarn: ({ message }) => {
        if (/Conflicting re-exports.*"symbols"/.test(message)) return;
        if (/Conflicting namespaces.*"symbols"/.test(message)) return;
        if (/Circular dependency/.test(message)) return;
        console.error(message);
    }
}
