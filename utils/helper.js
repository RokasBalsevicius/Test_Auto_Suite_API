const request = require("supertest");
const PET_GET_BASE_URL = "https://petstore.swagger.io/v2/pet/findByStatus?status=";


async function petGetterMethod(slug, objPropertyName, objStatus){
    const res = await request(PET_GET_BASE_URL).get(slug);
    expect(res.status).toBe(200);
    for(const obj of res.body) {
        expect(obj).toHaveProperty(objPropertyName);
        expect(obj.status).toBe(objStatus)
    };
    return res.body;

}

module.exports = petGetterMethod;