const months = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"];

export function analyzeUserJoinDate(users) {
    let output = new Array(12).fill(0);
    users.forEach(function(user) {
        let monthOfJoin = user.joiningDate.split("/")[1];
        output[monthOfJoin - 1] += 1;
    });
    return output.map((value , index) => ({month: months[index] , users: value}));
}

export function analyzeSales(transactions) {
    let output = new Array(12).fill(0);
    transactions.forEach(function(transaction) {
        let monthOfTransaction = transaction.date.split("/")[1];
        output[monthOfTransaction - 1] += transaction.amount;
    });
    return output.map((value , index) => ({month: months[index] , sales: value}));
}

export function analizeTransactionsStatus(transactions) {
    let output = new Array(3).fill(0);
    transactions.forEach(function(transaction) {
        if(transaction.status === "Approved") {
            output[0] += 1;
        }

        if(transaction.status === "Pending") {
            output[1] += 1;
        }

        if(transaction.status === "Declined") {
            output[2] += 1;
        }
    })

    return [
        {status: "Approved" , amount: output[0] , color: "#08CB00" },
        {status: "Pending" , amount: output[1] , color: "#647FBC" },
        {status: "Declined" , amount: output[2] , color: "#DC143C" },
    ];

}

export function validateEmail(email) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return regex.test(email);
}

export function validateUsername(username) {
    const regex = /^[a-zA-Z]/
    return regex.test(username);
}

export function vaildateProfession(profession) {
    return true;
}
export function validateBirthDate(birthDate) {
    const regex = /^\d{4}\/\d{1,2}\/\d{1,2}$/;
    if(regex.test(birthDate)) {
        let [year , month , day] = birthDate.split("/");
        if(+year <= (new Date()).getFullYear() && +month <= 12 && day <= 30) return true;
     }
     return false;
}
export function validatePassword(passsword) {
    if(passsword.length < 8) return false;  
    return true;
}
