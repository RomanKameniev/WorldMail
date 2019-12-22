const { ObjectId } = require('mongodb')
const axios = require('axios');

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
    getPackage(id: ID!): [Package]
    getMessage: String
    getUser(id: ID!): User 
}

type Package {
    id: ID!
    data: String
}

type User {
    id: ID
    uuid: String
    name: String
    email: String
    password: String
}


type Mutation {
    setMessage(message: String): String
    setUserById(uuid: String!): User
    setUser(id: ID, name: String, email: String, password: String): User
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

const resolvers = {

    Query: {
        getPackage: async (root, args, context, info) => {
            console.log('package => ', root, args, context, info)
        },
        getMessage: async (root, args, context, info) => {
            return "Darova"
        },
        getUser: async (root, args, context, info) => {
            console.log("user", args)
            return { name: "Roman", email: "mail" }
        }
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
        setMessage: async (root, args, context, info) => {
            console.log('set Message', args)
        },
        setUser: async (root, args, context, info) => {
            console.log("Args =>", args)
            return { id: "idasdasd" }
            //return{ id:"!231as", name:"Roman",email:"romansEmail", password:"wasdads"}
        },
        setUserById: async (root, args, context, info) => {
            console.log('user by uuid', args)
            axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
                .then(response => {
                    console.log(response.data.url);
                    console.log(response.data.explanation);
                })
                .catch(error => {
                    console.log(error);
                });
            return { uuid: args.uuid }
        }
        /*

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
        */
    },
}

module.exports = { resolvers, typeDefs }
