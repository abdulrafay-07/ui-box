import { z } from "zod";

export const featureSchema = z.object({
   name: z.string().min(3, "Name must be at least 3 characters long.").max(20, "Name must not be greater than 20 characters."),
   description: z.string().min(20, "Description must be at least 20 characters long.").max(250, "Description must not be greater than 250 characters."),
});