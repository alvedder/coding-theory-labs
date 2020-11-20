import {GolayCode} from "./GolayCode.js";
import {bitArrayToString, bitMatrixToString} from "../shared/Converters.js";
import {RMCode} from "./RMCode.js";

console.log("\n************** 4.1 ***************\n");

const golayCode = new GolayCode();
const data = [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0];
console.log("Data:", bitArrayToString(data));

const encoded = golayCode.encode(data);
console.log("Encoded:", bitArrayToString(encoded));

const encodedWithError = golayCode.injectError(encoded, 2);
console.log("Encoded with error:", bitArrayToString(encodedWithError));

const decoded = golayCode.decode(encodedWithError);
console.log("Decoded:", bitArrayToString(decoded));

const w1 = [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0];
const w2 = [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0];

const w1Decoded = golayCode.decode(w1);
const w2Decoded = golayCode.decode(w2);

console.log("lecture 1st example data:", bitArrayToString(w1));
console.log("lecture 1st example decoded:", bitArrayToString(w1Decoded));
console.log("lecture 2nd example data:", bitArrayToString(w2));
console.log("lecture 2nd example decoded:", bitArrayToString(w2Decoded));

console.log("\n************** 4.2 ***************\n");

const rmCode = new RMCode(1, 3);
const G = rmCode.generateG();
console.log(`G(${rmCode.r}, ${rmCode.m}):`);
console.log(bitMatrixToString(G))