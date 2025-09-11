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
    /*Flaky, seems that properties may have different values from time to time*/
    test("GET booking by booking id", async() => {
        const res = await request(BASE_URL)
            .get("/booking/1")
            .set("Accept", "application/json");
        expect(res.statusCode).toBe(200);
        expect(res.body.lastname).toBe("Brown");
        expect(res.body).toHaveProperty("bookingdates");
        console.log("response body: ", res);
    })
})