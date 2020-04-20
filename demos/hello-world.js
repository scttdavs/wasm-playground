import { wasmBrowserInstantiate } from "./utils/browser-instantiate.js";

const runWasmAdd = async () => {
  // Instantiate our wasm module
  const wasmModule = await wasmBrowserInstantiate("./build/hello-world.wasm");

  // Call the Add function export from wasm, save the result
  const addResult = wasmModule.instance.exports.add(1, 1);

  // Set the result onto the body
  document.body.textContent = `Hello World! addResult: ${addResult}`;
};
runWasmAdd();
