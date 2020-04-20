import { wasmBrowserInstantiate } from "./utils/browser-instantiate.js";

const runWasm = async () => {
  // Instantiate our wasm module
  // And pass in a wasm module
  // the key "imports" below must match the file name we are instantiating
  const moduleInstance = await wasmBrowserInstantiate("./build/imports.wasm", {
    imports: {
      consoleLog: value => console.log("Logged from WASM", value)
    }
  });
};
runWasm();
