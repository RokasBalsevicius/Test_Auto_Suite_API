
const { random4DigitNumberGenerator, categoryIdGenerator, randomNameGenerator, randomStatusSelector } = require("./dataGenerators.js");

class petpayload_POST {
    static generate() {
        return {
            "id": random4DigitNumberGenerator(),
            "category": {
              "id": categoryIdGenerator(),
              "name": randomNameGenerator()
            },
            "name": randomNameGenerator(),
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": random4DigitNumberGenerator(),
                "name": randomNameGenerator()
              }
            ],
            "status": randomStatusSelector()
        }
    }
}

module.exports = petpayload_POST;