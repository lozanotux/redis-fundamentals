<?php
$client = new Redis();

try {
    $client->connect('127.0.0.1', 6379);
    $client->auth('s3cr3t');

    // Delete the key
    $client->del('hello');
    $client->close();
} catch (RedisException $error) {
    echo "Error connecting with Redis: " . $error->getMessage();
}
?>