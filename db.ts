import {MongoClient} from 'mongodb';
class Main{
    static main(){
        Main.find();
    }
    static async find(){
        const url = 'mongodb://localhost://27017';
        const client = await MongoClient.connect(url);
        const db = client.db('collect');

        const docs = await db.collection('term').find().toArray();
        
        docs.forEach(item => console.log(item));
        client.close();
    }
    static async delete(){
        const url = 'mongodb://localhost://27017';
        const client = await MongoClient.connect(url);
        const db = client.db('collect');

        const output = await db.collection('term').deleteMany({todo:'DONE'});
        console.log(output);
        client.close();
    }
    static async update(){
        const url = 'mongodb://localhost://27017';
        const client = await MongoClient.connect(url);
        const db = client.db('collect');

        const output = await db.collection('term').updateOne({todo:'DONE'},{$set:{todo: "KISHORE"}});
        console.log(output);
        client.close();
    }
    static async insert(){
        const url = 'mongodb://localhost://27017';
        const client = await MongoClient.connect(url);
        const db = client.db('collect');

        const output = await db.collection('term').insertOne({todo:'DONE'});
        console.log(output);
        client.close();
    }
}

Main.main();
