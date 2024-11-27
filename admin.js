const { kafka }=  require("./client");
async function init(){
    const admin=kafka.admin();
    console.log("Admin connecting...");
    await admin.connect();
    console.log("Admin connection successful...");

    await admin.createTopics({
        topics:[
        {
        topic:"food-delivery",
        numPartitions:2},
        ]


    })
    console.log("Topic Create successful");
    console.log("Disconnecting Admin");
    await admin.disconnect();
}

init();