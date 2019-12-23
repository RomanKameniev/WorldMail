const { ObjectId } = require('mongodb')
const axios = require('axios');
const postWrapper = require('./wrapper.js');

const typeDefs = `
type Query {
    getPackage(id: ID!): Package
    getMessage: String
    getUser(id: ID!): User 
}

type Package {
    id: ID!
    code: Int
    data: [PackageData]
}
type PackageData {
    country: String
    status: String
    date: String
    barcode: String
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
            let data
            try {
  //              console.log('args => ', args)
                data = await new Promise((res, req) => {
                    postWrapper.getPackage(args.id)
                        .then(data => {
//                            console.log('data in schema', data)
                            if (data) return res(data)
                            return req(data)
                        })
                })
            } catch (error) {
                console.log('error=>', err)
            }
            finally {
                console.log('responce => ',data)
                return { id: args.id, code: data[0].code, data: data[0].data }

                //console.log('package => ', root, args, context, info)
            }
        },
        getMessage: async (root, args, context, info) => {
            return "Darova"
        },
        getUser: async (root, args, context, info) => {
            console.log("user", args)
            return { name: "Roman", email: "mail" }
        }

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
      
    },
}

module.exports = { resolvers, typeDefs }
