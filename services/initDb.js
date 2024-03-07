const db = require("../model")
const Users = db.users;
const Crops = db.crops

module.exports = async () => {
    const dummyUsers = [
        {
            name: "VishalKumar  ",
            email: "VishalKumar@gmail.com",
            password: "vishal@123"
        },
        {
            name: "aman",
            email: "aman@gmail.com",
            password: "aman@123"
        }        
    ]

    const dummyCrops = [
        {
            name: "Apple	"
        },
        {
            name: "Grapefruit"
        },
        {
            name: "Kiwi"
        },
        {
            name: "Muskmelon"
        },
        {
            name: "Olive"
        },
        {
            name: "Raspberries"
        }
    ]

    await Users.bulkCreate(dummyUsers);
    await Crops.bulkCreate(dummyCrops);
    console.log("all Dummy Data Created successfully.");
}
