"use server";

import { signUpSchema } from "@/lib/schemas";
import { z } from "zod";
import argon2 from "argon2";

import db from "@/db";
import { lower, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export const signUpUser = async (values: z.infer<typeof signUpSchema>) => {
  const validatedFields = signUpSchema.safeParse(values);

  if (!validatedFields.success) {
    console.error(validatedFields.error);
    return { message: "Invalid fields", error: true };
  }

  const { firstName, lastName, email, password } = validatedFields.data;

  try {
    const existingUser = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(lower(users.email), email.toLowerCase()));
    if (existingUser.length > 0) {
      return { message: "User already exists", error: true };
    }

    // ALTERNATIVE METHOD TO CHECK IF USER EXISTS
    // const existingUser = await db
    //   .select({ id: users.id })
    //   .from(users)
    //   .where(eq(lower(users.email), email.toLowerCase()))
    //   .then((res) => res[0]);
    // if (existingUser.id) {
    //   return { message: "User already exists", error: true };
    // }
  } catch (error) {
    console.error(error);
    return { message: "Something went wrong", error: true };
  }

  try {
    const hashedPassword = await argon2.hash(password);

    const newUser = await db
      .insert(users)
      .values({
        name: `${firstName} ${lastName}`,
        email,
        password: hashedPassword,
      })
      .returning({ id: users.id })
      .then((res) => res[0]);

    console.log(newUser);

    return { message: "User created successfully", error: false };
  } catch (error) {
    console.error(error);
    return { message: "Something went wrong", error: true };
  }
};
