import { wasmBrowserInstantiate } from "./utils/browser-instantiate.js";

const runWasm = async () => {
  // Instantiate our wasm module
  const wasmModule = await wasmBrowserInstantiate("./build/memory.wasm");

  // Get our exports object, with all of our exported Wasm Properties
  const exports = wasmModule.instance.exports;

  // Get our memory object from the exports
  const memory = exports.memory;

  // Create a Uint8Array to give us access to Wasm Memory
  const wasmByteMemoryArray = new Uint8Array(memory.buffer);

  // Let's read index zero from JS, to make sure Wasm wrote to
  // wasm memory, and JS can read the "passed" value from Wasm
  console.log(wasmByteMemoryArray[0]); // Should Log "24".

  // Next let's write to index one, to make sure we can
  // write wasm memory, and Wasm can read the "passed" value from JS
  // 8 bit max is 255
  wasmByteMemoryArray[1] = 255;
  console.log(exports.readWasmMemoryAndReturnIndexOne()); // Should Log "25"
};
runWasm();
