from redis import Redis

client = Redis(
    host='localhost',
    port=6379,
    db=0,  # You can select a certain db
    password='s3cr3t'
)

# Get a Redis Hash
dictionary = client.hgetall('person1')

for key, value in dictionary.items():
    print(f"{key.decode('utf-8')}: {value.decode('utf-8')}")