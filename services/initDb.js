const db = require("../model")
const Users = db.users;
const Crops = db.crops

module.exports = async () => {
    const dummyUsers = [
        {
            name: "Shavika Mittal",
            email: "shavika619@gmail.com",
            password: "Test@123"
        },
        {
            name: "Demo User",
            email: "demo@gmail.com",
            password: "Test@123"
        }        
    ]

    const dummyCrops = [
        {
            name: "Wheat"
        },
        {
            name: "Rice"
        },
        {
            name: "Barley"
        },
        {
            name: "Jowar"
        },
        {
            name: "Millets"
        },
        {
            name: "Corn"
        }
    ]

    await Users.bulkCreate(dummyUsers);
    await Crops.bulkCreate(dummyCrops);
    console.log("Dummy Repords inserted");
}
