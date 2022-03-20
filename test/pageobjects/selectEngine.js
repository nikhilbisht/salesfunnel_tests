class Engine{

    get title(){
        return $('[class*="Title__isFirstElement"] span')
    }

    get selectEngine(){
        return $('button[name="engine"]:nth-child(1)')
    }


}

module.exports = new Engine();
