const { kafka } = require("./client");

async function init() {
    const producer = kafka.producer();
    
    console.log('Connecting Producer...');
    await producer.connect();
    console.log("Producer Connected Successfully");

    await producer.send({
        topic: 'food-delivery',
        messages: [
            {
                partition: 0,
                key: 'location-update',
                value: JSON.stringify({ name: "Tony Stark", loc: "Earth 616" })
            },
        ],
    });

    console.log("Message sent successfully");
    await producer.disconnect();
}

init();
