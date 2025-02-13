import { describe, test, expect } from "vitest";
import UmamiAPIClient from "../src/index";

const invalidTarget = "example.com";
const user = "user";
const password = "password";
const returnClasses = false;

describe("negative cases", () => {
	test("getWebsite to an invalid target must respond 404", async function () {
		// flaky with timeout to 1 sec

		const umami = new UmamiAPIClient(invalidTarget, user, password, returnClasses);
		await expect(umami.getWebsite()).rejects.toThrow("Request failed with status code 404");
	});
});
