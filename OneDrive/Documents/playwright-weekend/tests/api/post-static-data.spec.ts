import { test, expect } from '@playwright/test';
import { request } from 'http';

//test case 1
test('test-api-001 - User create booking with static data', async ({ request}) => {
    const response = await request.post(`https://restful-booker.herokuapp.com/booking`, {
        data: {
            "firstname": "Jim",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2023-06-01",
                "checkout": "2023-06-15"
            },
            "additionalneeds": "Breakfast"
        }
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    expect(responseBody).toHaveProperty("bookingid"); // dynamic value
    expect(typeof responseBody.bookingid).toBe('number'); // assert data type
    expect(responseBody.booking).toHaveProperty("firstname", "Jim");
    expect(responseBody.booking).toHaveProperty("lastname", "Brown");
    expect(responseBody.booking).toHaveProperty("totalprice", 111);
    expect(responseBody.booking).toHaveProperty("depositpaid", true);
}
);