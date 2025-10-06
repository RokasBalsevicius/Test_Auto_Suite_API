const request = require("supertest");
const { petGetterMethod, petPOSTmethod } = require("../utils/petstoreMethods.js");

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

    test("POST a pet to petstore", async() => {
        await petPOSTmethod();
    })
});

