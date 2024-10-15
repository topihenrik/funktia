import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import svgr from "@svgr/rollup";
import { dts } from "rollup-plugin-dts";

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: 'dist/index.js',
                format: "esm",
                sourcemap: true
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript(),
            svgr(),
            postcss({
                extensions: ['.css']
            })
        ]
    },
    {
        input: "src/index.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
    },
];
