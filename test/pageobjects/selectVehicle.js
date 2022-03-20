class SelectVehicle{

    get title(){
        return $('[class*="Title__isFirstElement"] span')
    }
    
    get findByModel(){
        return $('[name="list"]')
    }

    get inputCarBrand(){
        return $('input[name="makeFilter"]')
    }

    get carBrandList(){
        return $('div[class*="SingleClickListField__container"] [name="make"]')
    }

    async enterCarBrand(carBrand){
        await this.inputCarBrand.setValue(carBrand);
    }

    async selectCarBrand(){
        await this.carBrandList.click()
    }

}

module.exports = new SelectVehicle();