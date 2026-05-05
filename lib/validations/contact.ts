
import { z } from "zod";

export type ContactInput = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function createContactSchema(
  t: (key: "name" | "email" | "phone" | "message") => string,
) {
  return z.object({
    name: z.string().min(2, t("name")).max(120),
    email: z.string().email(t("email")),
    phone: z.string().min(8, t("phone")).max(32, t("phone")),
    message: z.string().min(10, t("message")).max(4000),
  });
}

export type ContactSchema = ReturnType<typeof createContactSchema>;

export const contactSchemaApi = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(8).max(32),
  message: z.string().min(10).max(4000),
});
