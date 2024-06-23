import { CollectionConfig } from 'payload/types'

const Pages: CollectionConfig = {
    slug: 'pages',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'uniqueField',
            type: 'text',
            unique: true,
        },
    ],
}

export default Pages