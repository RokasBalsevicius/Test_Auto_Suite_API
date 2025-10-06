const request = require("supertest");
const petpayload_POST = require("../test-data/POST_payload.js");
const PET_GET_BASE_URL = "https://petstore.swagger.io/v2/pet/findByStatus?status=";
const BASE_URL = "https://petstore.swagger.io/v2/pet";


async function petGetterMethod(slug, objPropertyName, objStatus){
    const res = await request(PET_GET_BASE_URL).get(slug);
    expect(res.status).toBe(200);
    for(const obj of res.body) {
        expect(obj).toHaveProperty(objPropertyName);
        expect(obj.status).toBe(objStatus)
    };
    return res.body;
};

async function petPOSTmethod(){
    const payload = petpayload_POST.generate()
    const res = await request(BASE_URL)
        .post("/")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send(payload)

    expect(res.status).toBe(200);
    expect(res.body.id).toBe(payload.id);
    expect(res.body.category.id).toBe(payload.category.id);
    console.log("Created pet is: ", res.body);
    return res.body;
}

module.exports = {
    petGetterMethod,
    petPOSTmethod
}