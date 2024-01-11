import * as z from "zod";

export const StoreValidation = z.object({ name: z.string().min(1) });
