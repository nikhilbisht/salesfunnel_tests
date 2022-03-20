class SelectFuel{

    get questionTitle(){
        return $('[class*="Title__isFirstElement"] span')
    }

    async selectFuelType(type){
        await $(`//button[@name="fuelType"]//label[text()='${type}']`).click()
    }
}

module.exports= new SelectFuel()