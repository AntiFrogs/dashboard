const initTransactions = [
    {
        id:1,
        user: { id:3 , imagePath: "images/ayanami.jpg" , username: "Jone Doe" , profession: "Baker"},
        date: "2024/12/4",
        amount: 122,
        status: "Approved",
    },

    {
        id:2,
        user: { id:7 , imagePath: "images/ayanami.jpg" , username: "Fatemeh Aali" , profession: "Unemployed"},
        date: "2024/10/24",
        amount: 15,
        status: "Pending",
    },

    {
        id:3,
        user:    { id:1 , imagePath: "images/ayanami.jpg" , username: "Peyman Bigdeli" , profession: "software developer"},
        date: "2024/8/14",
        amount: 200,
        status: "Approved",
    },
    
    {
        id:4,
        user: { id:6 , imagePath: "images/ayanami.jpg" , username: "Ali JahanBakhsh" , profession: "Influencer"},
        date: "2024/8/12",
        amount: 300,
        status: "Declined",
    },
    {
        id:5,
        user: { id:6 , imagePath: "images/ayanami.jpg" , username: "Ali JahanBakhsh" , profession: "Influencer"},
        date: "2024/8/11",
        amount: 400,
        status: "Declined",
    },
    {
        id:6,
        user: { id:2 , imagePath: "images/ayanami.jpg" , username: "Ali Rezvani" , profession: "mechanical engineer"},
        date: "2024/5/20",
        amount: 165,
        status: "Approved",
    },
];

export default initTransactions;