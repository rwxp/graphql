import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema.js"



const app = express();

app.get('/', (req, res)=>{
    res.json({message: "Hello World"})
})

//Graphql middleware
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}))

app.listen(3000, ()=>{
    console.log('Server on port 3000')
})