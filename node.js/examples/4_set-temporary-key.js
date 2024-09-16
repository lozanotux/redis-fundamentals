import { createClient } from 'redis';

const client = createClient({
    host: 'localhost',
    port: 6379,
    password: 's3cr3t',
});

await client.connect();
console.log('Redis server is ready!')

// Set temporary key with expiration time EX in seconds
// In visual studio code extension, this time is under TTL (Time To Live) propery
await client.set('hello', 'world', {EX: 10})

process.exit(0);