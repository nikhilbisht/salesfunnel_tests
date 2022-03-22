class Utility {

    async getDate(dayFromNow = undefined, isPastDate = undefined) {
        var today, date;
        today = new Date();
        if (dayFromNow != undefined) {
            if (isPastDate) {
                today.setDate(today.getDate() - dayFromNow)
            } else {
                today.setDate(today.getDate() + dayFromNow)
            }

        }
        date = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`

        return date;

    }
}

module.exports = new Utility()
