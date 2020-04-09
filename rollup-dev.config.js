import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import serve from "rollup-plugin-serve";

const serveopts = {
  contentBase: ["./dist"],
  host: "localhost",
  port: 5000,
  allowCrossOrigin: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

export default {
  input: "app.js",
  output: {
    file: "atomic_calendar.js",
    format: "iife",
  },
  watch: {
    clearScreen: false,
  },
  plugins: [resolve(), commonjs({ fast: true }), serve(serveopts)],
};
