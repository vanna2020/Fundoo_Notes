const redis = require("redis");

let client;
class RedisConnection {
  constructor () {
    this.connect();
  }
  connect = () => {
    client = redis.createClient(6379, "127.0.0.1");
    client.connect();
    client.on("connect", function () {
      console.log("Redis server Connected");
    });
  };
  findData = (key) => {
    client.get(key + "getRedisById", (error, data) => {
      if (error) {
        throw error;
      } else if (data) {
        return JSON.parse(data);
      } else {
        return null;
      }
    });
  };
  putData = (key, time, data) => {
    client.setEx(key, time, data);
  };
  deleteCache = (key) => {
    client.del(key, (error, response) => {
      if (error) {
        return false;
      } else {
        return true;
      }
    });
  };
}
module.exports = new RedisConnection();