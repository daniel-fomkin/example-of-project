function notEmpty(data, dataName){
    if(Number.isNaN(data) || !data || !data.trim() || data === null ){
        const err = new Error(dataName + " required and cannot be empty");
        err.status = 400

        throw err;
    }
}

module.exports = {
    notEmpty
}