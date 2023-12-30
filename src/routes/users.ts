import Elysia, { t } from "elysia";
import { User } from "../models/UserModel";

export const users = (config : {prefix: string}) => new Elysia({
	name: "users-route",
	seed: config
	}).get(`${config.prefix}/all`, async () => {
	try {
		return await User.find()
	} catch (error) {
		console.log({error});
		return error
	}
	}).post(`${config.prefix}/create`, async ({ body :{name, age}}) => {
		
		try {
			const user = new User({
			name: name,
			age: age
		})
		await user.save()
		return {
			msg: "user created succeuully"
		}
		} catch (error) {
			console.log({error});
			
			return error
		}
	}, {
		body: t.Object({
		name: t.String(),
			age: t.Numeric()
		})
	})