# Dependency: pip install redis
from redis import Redis

# Establish connection
client = Redis(host="localhost", port=6379, db=0, password="s3cr3t")

# Verify if the redis server is ready
try:
    client.ping()
    print("Redis server is ready =)")
except:
    print("Redis server is not ready =(")

# Set and Get a key-value pair from Redis
try:  #        key      value
    client.set("hello", "world")
    value = client.get("hello")
    if value is not None:
        print(f"The value of the key in cache is: {value.decode("utf-8")}")
except Exception as ex:
    print(f"An error has ocurred in Redis: {ex}")
