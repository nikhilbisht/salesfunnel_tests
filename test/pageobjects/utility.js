class Utility{
    async todayDate(){
        var today= new Date()
        return `${today.getDate()}.${today.getMonth()+1}.${today.getFullYear()}`
    }
}

module.exports = new Utility()