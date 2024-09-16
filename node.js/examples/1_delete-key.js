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

// Set a key
await client.set('hello', 'world');
console.log('> Key added');

// Delete a key
await client.del('hello');
console.log('> Key deleted');

process.exit(0);