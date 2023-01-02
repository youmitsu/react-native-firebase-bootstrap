import { z } from "zod";

const _User = z.object({
  name: z.string(),
});
export type Schema = z.infer<typeof _User>;
export const parse = (obj: unknown): Schema => {
  return _User.parse(obj);
};
