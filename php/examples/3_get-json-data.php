<?php
$client = new Redis();
$client->connect('127.0.0.1', 6379);
$client->auth('s3cr3t');

// Set a key
$key = "person"
$json_value = '{"first_name": "Juan", "last_name": "Lozano", "age": 34}';

$client->set($key, $json_value);

// Get JSON data
$json_object = $client->get($key);
print_r(json_decode($json_object));

$client->close();
?>