# Redis

Redis (**RE**mote **DI**ctionary **S**erver) is an open-source, in-memory NoSQL key-value store primarily used as an application cache or a fast-response database. Since it stores data in memory rather than on disk or solid-state drives (SSD), Redis delivers unmatched speed, reliability, and performance.

## Instance with Containers

To use `redis-cli` command line interface, first run a container with a Redis instance:
```bash
podman run -d --name redis_container -p 6379:6379 -e REDIS_PASSWORD="s3cr3t" redis:7.4 redis-server --requirepass "s3cr3t"
```
```bash
podman exec -it redis_container redis-cli
```

> **NOTE:** to see the cache keys visually, you can use Visual Studio Code extension called `Dunn.redis`.

## Common Commands

The following are the most common commands that are used to interact with a Redis instance:

- **auth:** authentication with username and password
    ```bash
    127.0.0.1:6379> auth s3cr3t
    OK
    ```
- **SET:** set a new key-value pair
    ```bash
    127.0.0.1:6379> SET hello "world"
    OK
    ```
- **SET EX:** set a new key-value pair with expiration time (in seconds)
    ```bash
    127.0.0.1:6379> SET hello_ex "world_ex" EX 10
    OK
    ```
- **GET:** get value for a key
    ```bash
    127.0.0.1:6379> GET hello
    "world"
    ```
- **EXISTS:** query if a key exists or not
    ```bash
    127.0.0.1:6379> EXISTS hello
    (integer) 1
    ```
    > _NOTE:_ return 1 if exist or 0 (zero) if not.
- **exit:** exit from `redis-cli` command line interface
    ```bash
    127.0.0.1:6379> exit
    ```