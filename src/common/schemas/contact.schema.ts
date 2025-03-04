import { z } from "zod";

export const contactSchema = z.object({
  username: z.string().nonempty("Name is required"),
  email: z.string().email("Email is not valid").nonempty("Email is required"),
  message: z.string().nonempty("Message is required"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
