class EnginePower{

    get title(){
        return $('[class*="Title__isFirstElement"] span')
    }

    async selectEngPower(power){
        await $(`//*[contains(text(),'${power}')]`).click()
    }

}

module.exports = new EnginePower()