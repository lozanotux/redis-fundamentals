from redis import Redis

client = Redis(
    host='localhost',
    port=6379,
    db=0,  # You can select a certain db
    password='s3cr3t'
)

# The dictionary
person1 = {
    "id": 1,
    "first_name": "Juan",
    "last_name": "Lozano",
    "birth_year": 1990
}

# Set a Redis Hash
client.hset("person1", mapping=person1)