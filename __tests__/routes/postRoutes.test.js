/* eslint-disable no-undef */
const request = require("supertest");
const app = require("../../src/app");
const {
  posts: { newPosts, noTitlePost, noBodyPost, noAuthorIdPost, noAuthorPost, allPosts},
  users: { loginUser },
} = require("../mockedData.json");

describe("Posts routes tests", () => {
  test("GET /post should get all the posts", async () => {
    const response = await request(app).get("/post");

    expect(response.statusCode).toEqual(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body).toStrictEqual(allPosts);
  });

  test("POST /post should create a new post", async () => {
    const authResponse = await request(app).post("/user/login").send(loginUser);
    const response = await request(app)
    .post("/post")
    .send(newPosts[0])
    .set("authorization", authResponse.body.token);
    
    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual(
      `Post created successfull at id:${response.body.postId}.`
    );
  });

  test("POST /post should not create a new post without title", async () => {
    const authResponse = await request(app).post("/user/login").send(loginUser);
    const response = await request(app)
      .post("/post")
      .send(noTitlePost)
      .set("authorization", authResponse.body.token);

    expect(response.status).toEqual(400);
    expect(response.body.error).toEqual('"title" is required');
  });

  test("POST /post should not create a new post without body", async () => {
    const authResponse = await request(app).post("/user/login").send(loginUser);
    const response = await request(app)
      .post("/post")
      .send(noBodyPost)
      .set("authorization", authResponse.body.token);

    expect(response.status).toEqual(400);
    expect(response.body.error).toEqual('"body" is required');
  });

  test("POST /post should not create a new post without author", async () => {
    const authResponse = await request(app).post("/user/login").send(loginUser);
    const response = await request(app)
      .post("/post")
      .send(noAuthorPost)
      .set("authorization", authResponse.body.token);

    expect(response.status).toEqual(400);
    expect(response.body.error).toEqual('"author" is required');
  });

  test("POST /post should not create a new post without authorId", async () => {
    const authResponse = await request(app).post("/user/login").send(loginUser);
    const response = await request(app)
      .post("/post")
      .send(noAuthorIdPost)
      .set("authorization", authResponse.body.token);

    expect(response.status).toEqual(400);
    expect(response.body.error).toEqual('"authorId" is required');
  });
});
