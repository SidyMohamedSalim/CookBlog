import { z } from "zod";
export const articleScheme = z.object({
  title: z.string(),
  content: z.string(),
  description: z.string(),
});
