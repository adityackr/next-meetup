import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect(
            'mongodb+srv://adi:gp0v8aPb3VEPTKd9@cluster0.usjbg.mongodb.net/meetups?retryWrites=true&w=majority'
        );

        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Meetup inserted!' });

        // const url =
        //     'mongodb+srv://aditya:7ynCC9zN5q5VXXy@cluster0.usjbg.mongodb.net/meetups?retryWrites=true&w=majority';

        // const client = new MongoClient(url);

        // await client.connect();

        // const db = client.db();

        // const meetupsCollection = db.collection('meetups');
        // const result = await meetupsCollection.insertOne(data);
        // console.log(result);
        // await client.close();

        // res.status(201).json({ message: 'Meetup inserted!' });
    }
}

export default handler;
