"use server";

import { signUpSchema } from "@/lib/schemas";
import { z } from "zod";
import argon2 from "argon2";

export const signUpUser = async (values: z.infer<typeof signUpSchema>) => {
  const validatedFields = signUpSchema.safeParse(values);

  if (!validatedFields.success) {
    console.error(validatedFields.error);
    return { message: "Invalid fields", error: true };
  }

  const { firstName, lastName, email, password } = validatedFields.data;

  try {
    const hashedPassword = await argon2.hash(password);

    console.log({ firstName, lastName, email, password: hashedPassword });

    return { message: "User created successfully", error: false };
  } catch (error) {
    console.error(error);
    return { message: "Something went wrong", error: true };
  }
};
