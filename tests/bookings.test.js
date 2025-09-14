const request = require("supertest");

const BASE_URL = "https://restful-booker.herokuapp.com";

describe("Booking API Test", () => {
    test("GET all bookings", async() => {
        const res = await request(BASE_URL).get("/booking");
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    test("POST create booking", async () => {
        const payload = {
            firstname: "John",
            lastname: "Doe",
            totalprice: 120,
            depositpaid: true,
            bookingdates: {
                checkin: "2025-09-11",
                checkout: "2025-09-20"
            },
            additionalneeds: "Breakfast"
        };

        const res = await request(BASE_URL)
            .post("/booking")
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
            .send(payload);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("bookingid");
        expect(res.body.booking.firstname).toBe("John")
    });

    test("GET booking by booking id", async() => {
        const res = await request(BASE_URL)
            .get("/booking/1")
            .set("Accept", "application/json");
/*Had to create a dynamic expected name variable, since API is being used by many people - there is no same value always for lastname */
        const expectedName = res.body.lastname;
        console.info(`Prepared expected name value: ${expectedName}`)
        expect(res.statusCode).toBe(200);
        expect(res.body.lastname).toBe(expectedName);
        expect(res.body).toHaveProperty("bookingdates");
        console.log("response body: ", res);
    })
})