class SelectModel{

    get title(){
        return $('[class*="Title__isFirstElement"] span')
    }

    get modelField(){
        return $('input[name="modelFilter"]')
    }

    get carModelList(){
        return $('div[class*="SingleClickListField__container"] [name="model"]')
    }


    async inputCarModel(car_model){
        await this.modelField.setValue(car_model)
    }

    async selectCarModel(){
        await this.carModelList.click()
    }

}

module.exports = new SelectModel();