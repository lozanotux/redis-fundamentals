import { createClient } from 'redis';

const client = createClient({
    host: 'localhost',
    port: 6379,
    password: 's3cr3t',
});

await client.connect();
console.log('Redis server is ready!')

// Empty cache
client.FLUSHDB();
console.log("> Cleaned cache!")

process.exit(0)