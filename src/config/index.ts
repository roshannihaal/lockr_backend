import { configSchema } from './config.schema'

const result = configSchema.safeParse(process.env)

if (!result.success) {
    console.error(`Dotenv Configuration Error: ${result.error}`)
    process.exit(1)
}

export const config = result.data
