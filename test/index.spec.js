import { env, createExecutionContext, waitOnExecutionContext, SELF } from 'cloudflare:test';
import { describe, it, expect } from 'vitest';
import worker from '../worker.js';

describe('Short URL redirect worker', () => {
	const validRequest = "https://example.com/xmas";
	const invalidRequest = "https://example.com/bad-url";

	it('responds with 302 if the route is valid (unit style)', async () => {
		const request = new Request(validRequest);
		// Create an empty context to pass to `worker.fetch()`.
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		// Wait for all `Promise`s passed to `ctx.waitUntil()` to settle before running test assertions
		await waitOnExecutionContext(ctx);
		expect(response.status).toBe(302);
	});

	it('responds with a 404 if the route is invalid (unit style)', async () => {
		const request = new Request(invalidRequest);
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);
		expect(response.status).toBe(404);
	});

	it('is flagged as redirected if valid request (integration style)', async () => {
		const response = await SELF.fetch(validRequest);
		expect(response.redirected).toBe(true);
	});


	it('is not flagged as redirected if invalid request (integration style)', async () => {
		const response = await SELF.fetch(invalidRequest);
		expect(response.redirected).toBe(false);
	});
});
