"use server";

import { signInSchema } from "@/lib/schemas";
import { z } from "zod";

export const signInUser = async (values: z.infer<typeof signInSchema>) => {
  const validatedFields = signInSchema.safeParse(values);

  if (!validatedFields.success) {
    console.error(validatedFields.error);
    return { message: "Invalid fields", error: true };
  }

  try {
    return { message: "User logged in successfully", error: false };
  } catch (error) {
    console.error(error);
    return { message: "Something went wrong", error: true };
  }
};
