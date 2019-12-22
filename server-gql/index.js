
const express = require('express'),
	{ MongoClient, ObjectId } = require('mongodb'),
	{ ApolloServer } = require('apollo-server-express'),
	{ createServer } = require('http'),
	//	compression = require('compression'),
	{ resolvers, typeDefs } = require('./schema'),
	mongoURI = process.env.mongoURI || 'mongodb://localhost:27017',
	mongoDB = process.env.mongoDB || 'worldmail',
	port = process.env.PORT || 4000,
	PROD = process.env.NODE_ENV === 'production'

const app = express();

// compress all responses
//app.use(compression())

const start = async () => {
	try {
		const mongo = await MongoClient.connect(`${mongoURI}/${mongoDB}`, { useNewUrlParser: true, useUnifiedTopology: true })
		console.log("mongo = >", mongo ? "mongo connected" : "error")
		const db = mongo.db(mongoDB)
		const users = db.collection('users')
		const packages = db.collection('packages')

		// indexes
		//post.createIndex({ kind: 1 })

		const apollo = new ApolloServer({
			typeDefs,
			resolvers,
			context: async req => {
				let token = false, uid = false;
				return {
					db: mongo,
					users,
					packages
				}
			},
			introspection: !PROD,
			playground: !PROD,
		})

		apollo.applyMiddleware({ app });
		const server = createServer(app);

		server.listen({ port }, () => {
			console.log(`🚀 Server ready at http://0.0.0.0:${port}${apollo.graphqlPath}`);
		});
	} catch (e) {
		console.error('Error:', e.toString())
	}
}

start()
