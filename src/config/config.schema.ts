import z from 'zod'

export const configSchema = z.object({
    PORT: z.string().trim()
})

export type configSchema = z.infer<typeof configSchema>
