import { createClient } from 'redis';

const client = createClient({
    host: 'localhost',
    port: 6379,
    password: 's3cr3t'
});

client.on('error', function (error) {
    console.log('Redis Client Error ' + error)
});

await client.connect();
console.log('Redis server is ready!')

// Set Example
await client.set('hello', 'world');

// Get Example
const value = await client.get('hello');
console.log("Value:", value)

process.exit(0);