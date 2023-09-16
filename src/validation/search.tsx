import { z } from "zod";

export const searchFormSchema = z.object({
  search: z.string({
    required_error: "Please enter a search term.",
  }),
});

export type SearchFormData = z.infer<typeof searchFormSchema>;
