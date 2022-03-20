const Page = require('./page');

class SelectPreCondition extends Page {
    get preConditionTitle(){
        return $('span[class*="SelectPreconditionStep__title"]>span')
    }

    get keepingCar_mainText(){
        return $('[data-testid="quoting.selectPrecondition.keepingCarquoting.selectPrecondition.keepingCar.subLine"] p:nth-child(1)')
    }

    get keepingCar_subText(){
        return $('[data-testid="quoting.selectPrecondition.keepingCarquoting.selectPrecondition.keepingCar.subLine"] p:nth-child(2)')
    }

    get buyingCar_mainText(){
        return $('[data-testid="quoting.selectPrecondition.buyingCarquoting.selectPrecondition.buyingCar.subLine"] p:nth-child(1)')
    }

    get buyingCar_subText(){
        return $('[data-testid="quoting.selectPrecondition.buyingCarquoting.selectPrecondition.buyingCar.subLine"] p:nth-child(2)')
    }

    get questionTitle(){
        return $('div[class*="Question__questionContainer"]>div:nth-child(1) span')
    }

    get inceptionDate(){
        return $('input[name="inceptionDate"]')
    }

    get submitBtn(){
        return $('[data-testid="button"]')
    }


    async selectOption(value){
        await $(`//span[contains(text(),'${value}')]`).click()
        
    }

    async enterInsStartDate(date){
        await this.inceptionDate.setValue(date)
    }

    open () {
        return super.open();
    }

   

    
}

module.exports = new SelectPreCondition();