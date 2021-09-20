/* eslint-disable no-undef */
const request = require("supertest");
const app = require("../../src/app");
const {
  users: { unregisteredEmail, incorretPassword, usersData, loginUser },
} = require("../mockedData.json");

describe("Users routes tests", () => {
  test("POST /user/register. Create user.", async () => {
    const response = await request(app)
      .post("/user/register")
      .send(usersData[0]);

      expect(response.statusCode).toEqual(201);
    expect(response.body.message).toEqual("User registered with success!");
  });

  test("POST /user/register. Create existent User ", async () => {
    const response = await request(app)
      .post("/user/register")
      .send(usersData[0]);

    expect(response.status).toEqual(409);
    expect(response.body.error).toEqual("User already exists!");
  });

  test("POST /user/login when user does not exist.", async () => {
    const response = await request(app).post("/user/login").send(unregisteredEmail);

    expect(response.status).toEqual(401);
    expect(response.body.message).toEqual("Unauthorized, wrong email!");
  });

  test("POST /user/login when password is not correct.", async () => {
    const response = await request(app)
      .post("/user/login")
      .send(incorretPassword);

    expect(response.status).toEqual(401);
    expect(response.body.message).toEqual("Unauthorized, wrong password");
  });

  test("POST /user/login", async () => {
    const response = await request(app).post("/user/login").send(loginUser);

    expect(response.statusCode).toEqual(200);
    expect(response.body.token).toBeDefined();
    expect(response.body.name).toEqual("Matheus");
  });
});
