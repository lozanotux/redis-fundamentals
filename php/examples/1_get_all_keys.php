<?php
$client = new Redis();

try {
    $client->connect('127.0.0.1', 6379);
    $client->auth('s3cr3t');

    // Maybe in production environment you should use scan() method
    $keys = $client->keys('*');
    print_r($keys)
} catch (RedisException $error) {
    echo "Error connecting with Redis: " . $error->getMessage();
} 
?>