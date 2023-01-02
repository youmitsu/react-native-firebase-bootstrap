import { z } from "zod";

const _User = z.object({
  name: z.string(),
});
export type User = z.infer<typeof _User>;

const _Sample = z.object({
  name: z.string(),
  createdAt: z.number(),
});
export type Sample = z.infer<typeof _Sample>;
