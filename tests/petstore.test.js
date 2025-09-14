const request = require("supertest");
const petGetterMethod = require("../utils/helper.js");

const BASE_URL = "https://petstore.swagger.io/v2/pet";

describe("Pet Store API Test", () => {
    test("GET all Available pets", async() => {
        await petGetterMethod("available", "id", "available");
    });

    test("GET all Pending pets", async() => {
        await petGetterMethod("pending", "id", "pending");
    });

    test("GET all Sold pets", async() => {
        await petGetterMethod("sold", "id", "sold");
    });
})
