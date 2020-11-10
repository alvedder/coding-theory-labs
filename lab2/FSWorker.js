import fs from "fs";

export class FSWorker {
 	async readDataFromFile(path) {}
	async writeDataToFile(data, path) {}
}

export class JSONFileWorker extends FSWorker {

	/**
	 * file format should be .json and all the data should be contained into "data".
	 * Example: { "data": "1001010" }
	 * @param path
	 * @returns {Promise<string>}
	 */
	async readDataFromFile(path) {
		return new Promise(resolve => {
			fs.readFile(path, (error, buffer) => {
				resolve(this.#extractData(buffer));
			});
		});
	}

	/**
	 * @param data
	 * @param path
	 * @returns {Promise<void>}
	 */
	async writeDataToFile(data, path = "out.json") {
		return new Promise(() => {
			fs.writeFile(path, this.#packData(data), error => {
				if (error) {
					console.log(error);
				} else {
					console.log(`File ${path} has been successfully written`);
				}
			})
		})
	}

	/**
	 * @param buffer
	 * @returns {string}
	 */
	#extractData(buffer) {
		return JSON.parse(buffer).data;
	}

	#packData(data) {
		return JSON.stringify({data});
	}
}
