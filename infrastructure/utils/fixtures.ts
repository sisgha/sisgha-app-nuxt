import { toNestError } from "@vorms/resolvers";
import type { Resolver } from "@vorms/resolvers/zod";
import { z } from "zod";

const parseErrorSchema = (zodErrors: z.ZodIssue[]) => {
  const errors: Record<string, string> = {};

  while (zodErrors.length) {
    const { path: _parse, message, ...rest } = zodErrors[0];
    const path = _parse.join(".");

    if (!errors[path]) {
      errors[path] = message;
    }

    if ("unionErrors" in rest) {
      rest.unionErrors.forEach((e) => {
        zodErrors.push(...e.errors);
      });
    }

    zodErrors.shift();
  }

  return errors;
};

export const zodResolver: Resolver = (schema) => async (values) => {
  try {
    await schema.parseAsync(values);
    return {};
  } catch (error: any) {
    return error.isEmpty ? {} : toNestError(parseErrorSchema(error.errors));
  }
};
