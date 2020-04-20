import { wasmBrowserInstantiate } from "./utils/browser-instantiate.js";

const runWasm = async () => {
  // Instantiate our wasm module
  const wasmModule = await wasmBrowserInstantiate("./build/exports.wasm");

  // Get our exports object, with all of our exported Wasm Properties
  const exports = wasmModule.instance.exports;

  console.log(exports);

  console.log(exports.callMeFromJavascript(24, 24)); // Logs 49

  // Since our constant is a global we use `.valueOf()`.
  // Though, in some cases this could simply be: exports.GET_THIS_CONSTANT_FROM_JAVASCRIPT
  console.log(exports.GET_THIS_CONSTANT_FROM_JAVASCRIPT.valueOf()); // Logs 2424

  // Trying to access a property we did NOT export
  console.log(exports.addIntegerWithConstant); // Logs undefined
};
runWasm();
