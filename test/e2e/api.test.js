import { jest, expect, test, describe, beforeEach } from "@jest/globals";

import superTest from "supertest";

//  flaky
/*
DESAFIO PARA QUEM ASSISTIU:
Fazer com que Rodar o POST primeiro, não suge o GET
https://youtu.be/hQB139HP3GE
*/
describe("API E2E Test Suite", () => {
  beforeEach(() => {
    jest.resetModules
  });
  test("POST /  - should save an item and return ok", async () => {
    const Server = require("../../src/server.js")
    const response = await superTest(Server).post("/").send({
      nome: "Luis Machado",
      age: 24,
    });
    const expectedResponse = { ok: 1 };
    expect(JSON.parse(response.text)).toStrictEqual(expectedResponse);
  });

  test("GET /  - should return an array", async () => {
    const response = await superTest(Server).get("/");

    const data = JSON.parse(response.text);
    expect(data).toBeInstanceOf(Array);
    expect(data.length).toEqual(0);
  });

  test.todo("DELETE /  - should save an item and return ok");
});
