<?php
$client = new Redis();

try {
    $client->connect('127.0.0.1', 6379);
    $client->auth('s3cr3t')
    echo "Redis server is ready!"

    // Simple key -> value set
    $redis->set('hello', 'world');
    // Get Example
    $value = $redis->get('hello');
    echo "The value of the key in cache is: " . $value

} catch (RedisException $e) {
    echo "An error has ocurred in Redis: " . $e->getMessage();
}

$client->close();
?>