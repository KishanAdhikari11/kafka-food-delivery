const { Kafka }= require('kafkajs');

exports. kafka=new Kafka({
    clientId:process.env.KAFKA_CLIENT_ID || "my-app",
    brokers: [process.env.KAFKA_BROKER || 'localhost:9092']
});