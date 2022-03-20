const Page = require('./page');
class RegisteredOwner extends Page {
    get carOwnerQstnTitle(){
        return $('[class*="Title__isFirstElement"] span')
    }

    get carStatusTitle(){
        return $('[class*="Question__questionContainer"] [data-test-id="wizardTitle"]>span')
    }

    get submitBtn(){
        return $('[data-testid="button"]')
    }

    selectCarOwner(value){
        return $(`label[data-testid="shared.${value}"] p>span`)
    }

    selectCarStatus(value){
        return $(`span[contains(text(),'${value}')]`)
    }

}

module.exports = new RegisteredOwner();