import { test, expect } from '@playwright/test';
import bookingDetails from '@test-data/booking-details.json';

//test case 2
test('test-api-002 - User create booking with static data', async ({ request}) => {
    const response = await request.post(`https://restful-booker.herokuapp.com/booking`, {
        data: bookingDetails
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