import Elysia from "elysia";

export const posts = (config: { prefix: string }) => new Elysia({
	name: "posts-route",
	seed: config
}).get(`${config.prefix}`, () => {
	return {
		"message":"HEllo guys. this is posts page"
	}
})