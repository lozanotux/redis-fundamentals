import { createClient } from 'redis';

const client = createClient({
    host: 'localhost',
    port: 6379,
    password: 's3cr3t',
});

client.on('error', function (error) {
    console.log('Error ' +  error);
});

await client.connect();
console.log('Redis server is ready!')

await client.set('person', 'Juan');

// Update a key
let value = await client.get('person');
console.log("Value: ", value);

const person = {
    first_name: 'Juan',
    last_name: 'Lozano',
    age: 34,
}

await client.set('person', JSON.stringify(person));

value = await client.get('person');
console.log('Updated value: ', JSON.parse(value));

process.exit(0)