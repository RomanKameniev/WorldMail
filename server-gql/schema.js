const { ObjectId } = require('mongodb')

const prepare = o => {
    if (!o) return o
    if (o.email) delete o.email
    if (o._id) {
        o.id = o._id.toString()
        delete o._id
    }
    return o
}

const typeDefs = `
type Query {
    package(id: ID!): [Package]
}

type Posts {
	id: ID!
	created: Int!
    title: String!
	msg: String!
	tags: [String]
	kind: Boolean!
	likes: Int!
}

type Package {
    id: ID!
    data: String
}

type Mutation {
	postAdd(title: String!, msg: String!, kind: Boolean!, tags: [String], email: String): Posts
}

schema {
	query: Query
	mutation: Mutation
}
`

const date = () => Math.floor(+new Date() / 1000)

const fetchArrayCursor = (c, sel, opts) => new Promise(resolve => {
    console.log('    -- fetchArrayCursor =>', sel)
    c.find(sel, opts, (e, cursor) => {
        if (e) return (resolve(console.error(e)))
        cursor.toArray((e, items) => {
            if (e) return (resolve(console.error(e)))
            cursor.count(false, (e, total) => {
                if (e) return (resolve(console.error(e)))
                resolve({ total, items })
            })
        })
    })
})

const data = [{ id: "aasd", data: "aga" }, { id: "2asdad" }]
const mapPost = (root, { id }) => data.filter(i => id === i.id)// && ({ id, ...post });
const resolvers = {

    Query: {
        package: async (root, args, context, info) => {
            //console.log('package => ', root, args, context, info)
            let res = data.filter(i => i.id == args.id)
            console.log("res", res)
            return res
        },
        /*getPosts: async (root, args, context) => {
            console.log('- getPosts args =>', args)
            let filter = {}
            if (args.after) filter._id = { $gt: ObjectId(args.after) };

            const { total, items } = await fetchArrayCursor(context.post, filter, { limit: 10 });
            console.log('- getPosts =>', items)
            return {
                total,
                edges: items.map(prepare),
            }
        },*/
    },



    Mutation: {
        /*userAdd: async(root, args, context, info) => {
            console.log('userAdd => ', root, args, context, info)
        },*/
        postAdd: async (root, args, context, info) => {
            console.log('- postAdd =>', args)
            const _id = ObjectId()
            const post = {
                _id,
                created: date(),
                title: args.title,
                msg: args.msg,
                kind: args.kind,
                tags: args.tags,
                email: args.email,
                likes: 0,
            }

            await context.post.insertOne(post)

            delete post.email

            return prepare(post)
        },
    },
}

module.exports = { resolvers, typeDefs }
