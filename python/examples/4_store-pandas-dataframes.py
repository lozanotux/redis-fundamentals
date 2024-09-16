from redis import Redis
import pandas as pd

redis = Redis(
    host='localhost',
    port=6379,
    db=0,  # You can select a certain db
    password='s3cr3t'
)

dataframe = pd.DataFrame({
    'A': [1, 2, 3],
    'B': [4, 5, 6],
    'C': [7, 8, 9]
})

# Set the dataframe
redis.set("dataframe", dataframe.to_json())

# Get the dataframe
dataframe_redis = redis.get("dataframe").decode("utf8")
dataframe_redis = pd.read_json(dataframe_redis)
print(dataframe_redis)