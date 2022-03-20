class RegistrationDate{

    get firstRegDateQuesnTitle(){
        return $('div[class*="Title__isFirstElement"]>span')
    }

    get firstRegDateLabel(){
        return $('label:nth-child(1)>span')
    }

    get carOwnerRegDateQuesnTitle(){
        return $('[class*="EnterRegistrationDateStep"] +div>div:nth-child(1) span')
    }

    get carOwnerRegDateLabel(){
        return $('[class*="EnterRegistrationDateStep"]+div label>span')
    }

    get inputfirstRegDate(){
        return $('input[name="monthYearFirstRegistered"]')
    }

    get inputCarOwnerRegDate(){
        return $('input[name="monthYearOwnerRegistered"]')
    }



    get submitBtn(){
        return $('[data-testid="button"]')
    }

    async enterFirstRegDate(date){
        await this.inputfirstRegDate.setValue(date)

    }

    async enterCarOwnerRegDate(date){
        await this.inputCarOwnerRegDate.setValue(date)

    }

}

module.exports = new RegistrationDate()