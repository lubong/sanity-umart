import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: "lk4zwe5u",
    dataset: "production"
})