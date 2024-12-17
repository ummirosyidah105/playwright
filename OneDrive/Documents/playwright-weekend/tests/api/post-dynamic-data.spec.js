import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { DateTime } from 'luxon';

const randomFirstName = faker.person.firstName();
const randomLastName = faker.person.lastName();
const randomNumber = faker.string.numeric(7);

const currentDate = DateTime.now().toFormat('yyyy-MM-dd');
const currentDatePlusFive = DateTime.now().plus({ days: 5 }).toFormat('yyyy-MM-dd');


//test case 3
test('test-api-003 - User create booking with static data', async ({ request}) => {
    const response = await request.post(`https://restful-booker.herokuapp.com/booking`, {
        data: {
            "firstname": randomFirstName,
            "lastname": randomLastName,
            "totalprice": parseInt(randomNumber),
            "depositpaid": true,
            "bookingdates": {
                "checkin": currentDate,
                "checkout": "currentDateplusFive"
            },
            "additionalneeds": "Breakfast"
        }
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    // const responseBody = await response.json()
    // expect(responseBody).toHaveProperty("bookingid"); // dynamic value
    // expect(typeof responseBody.bookingid).toBe('number'); // assert data type
    // expect(responseBody.booking).toHaveProperty("firstname", "Jim");
    // expect(responseBody.booking).toHaveProperty("lastname", "Brown");
    // expect(responseBody.booking).toHaveProperty("totalprice", 111);
    // expect(responseBody.booking).toHaveProperty("depositpaid", true);
}
);