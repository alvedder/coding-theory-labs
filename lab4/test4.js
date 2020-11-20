import {GolayCode} from "./GolayCode.js";
import {bitArrayToString, bitMatrixToString} from "../shared/Converters.js";
import {RMCode} from "./RMCode.js";

console.log("\n************** 4.1 ***************\n");

const golayCode = new GolayCode();
console.log("B:");
console.log(bitMatrixToString(golayCode.B));
console.log("G:");
console.log(bitMatrixToString(golayCode.G));
console.log("H:");
console.log(bitMatrixToString(golayCode.H));

const dataGolayCode = [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0];
console.log("Data:", bitArrayToString(dataGolayCode));
const encoded = golayCode.encode(dataGolayCode);
console.log("Encoded:", bitArrayToString(encoded));
const encodedWithError = golayCode.injectError(encoded, 2);
console.log("Encoded with errors:", bitArrayToString(encodedWithError));
const decoded = golayCode.decode(encodedWithError);
console.log("Decoded:", bitArrayToString(decoded), "\n");

const w1 = [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0];
console.log("Lecture 1st example data (encoded with errors):", bitArrayToString(w1));
const w1Decoded = golayCode.decode(w1);
console.log("Decoded:", bitArrayToString(w1Decoded), "\n");

const w2 = [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0];
console.log("Lecture 2nd example data (encoded with errors):", bitArrayToString(w2));
const w2Decoded = golayCode.decode(w2);
console.log("Decoded:", bitArrayToString(w2Decoded), "\n");



console.log("************** 4.2 ***************\n");

const rmCode = new RMCode(1, 3);
console.log("k:", rmCode.k);
console.log(`G(${rmCode.r}, ${rmCode.m}):`);
console.log(bitMatrixToString(rmCode.G));

const dataRmCode = [1, 1, 0, 0];
console.log("Data:", bitArrayToString(dataRmCode));
const encodedRmCode = rmCode.encode(dataRmCode);
console.log("Encoded:", bitArrayToString(encodedRmCode));
const encodedRmCodeWithError = rmCode.injectError(encodedRmCode);
console.log("Encoded with error:", bitArrayToString(encodedRmCodeWithError));
const decodedRmCode = rmCode.decode(encodedRmCodeWithError);
console.log("Decoded:", bitArrayToString(decodedRmCode), "\n");

const w3 = [1, 0, 1, 0, 1, 0, 1, 1];
console.log("Lecture 1nd example data (encoded with errors):", bitArrayToString(w3));
const w3Decoded = rmCode.decode(w3);
console.log("Decoded", bitArrayToString(w3Decoded), "\n");

const w4 = [1, 0, 0, 0, 1, 1, 1, 1];
console.log("Lecture 1nd example data (encoded with errors):", bitArrayToString(w4));
const w4Decoded = rmCode.decode(w4);
console.log("Decoded", bitArrayToString(w4Decoded), "\n");
