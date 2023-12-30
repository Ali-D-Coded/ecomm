import { Elysia } from "elysia";
import { posts, users } from "./routes";
import mongoose from "mongoose";

const app = new Elysia().onBeforeHandle(async () => {
   try {
      await mongoose.connect('mongodb+srv://aliallu3xa:XcLYEgqpytKncIeE@cluster0.zmqhtv7.mongodb.net/?retryWrites=true&w=majority')
   } catch (error) {
    console.log(error)
  }
}).onAfterHandle(async () => {
  try {
    await mongoose.disconnect()
  } catch (error) {
    console.log(error)
    
  }
  })
  .get("/", () => "Hello Elysia")
  .use(users({ prefix: "/users" }))
  .use(posts({ prefix: "/posts" }))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
