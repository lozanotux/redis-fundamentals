from redis import Redis
from redis.exceptions import RedisError

client = Redis(
    host='localhost',
    port=6379,
    db=0,  # You can select a certain db
    password='s3cr3t'
)

try:
    client.flushdb()
    print("Cleaned cache!")
except RedisError as error:
    print("Error has ocurred with Redis: ", error)