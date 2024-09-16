import { createClient } from 'redis';

const client = createClient({
    host: 'localhost',
    port: 6379,
    password: 's3cr3t',
});

try {
    await client.connect();
    console.log('Redis server is ready!')

    client.set('hello', 'world');
} catch (error) {
    if (error.code === 'ECONNREFUSED') {
        console.error('Error connecting with Redis server.');
    } else {
        console.error(error)
    }
}

process.exit(0);