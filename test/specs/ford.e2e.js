const preCondition = require('../pageobjects/selectPreCondition.page')
const registeredOwner = require('../pageobjects/registeredOwner')
const selectVehicle = require('../pageobjects/selectVehicle')
const selectModel = require('../pageobjects/selectModel')
const selectFuel = require('../pageobjects/selectFuel')
const enginePower = require('../pageobjects/selectEnginePower')
const engine = require('../pageobjects/selectEngine')
const registrationDate = require('../pageobjects/registrationDate')
var data = require('../../test-data/data-de.json')
const utility = require('../pageobjects/utility')


describe("UI Tests for Car Brand Ford", () => {

    before(async () => {
        await preCondition.open()
    })

    it("Accept Cookies", async () => {

        //waiting for Accept cookies pop-up to appear
        await $('#usercentrics-root').shadow$('[data-testid="uc-default-wall"]').waitForExist({ timeout: 7000 })
        //Clicking on Accept All
        await $('#usercentrics-root').shadow$('[data-testid="uc-accept-all-button"]').click()
    })

    it("Verify Placeholder and Title in SelectPreCondition Page", async () => {

        //Verifying the text for preCondition title
        await expect(preCondition.preConditionTitle).toHaveText(data.selectPreCondition.title)
        //Verifying the label for change of Insurer
        await expect(preCondition.keepingCar_mainText).toHaveText(data.selectPreCondition.changeOfInsurer.keepingCar.mainText)
        await expect(preCondition.keepingCar_subText).toHaveText(data.selectPreCondition.changeOfInsurer.keepingCar.subText)
        //Verifying the label for change of owner
        await expect(preCondition.buyingCar_mainText).toHaveText(data.selectPreCondition.changeOfOwner.buyingCar.mainText)
        await expect(preCondition.buyingCar_subText).toHaveText(data.selectPreCondition.changeOfOwner.buyingCar.subText)
        //Verifying the text for Insurance Start Date Question
        await expect(preCondition.questionTitle).toHaveText(data.selectPreCondition.insStartDateQuestion)
        //Verifying the button Text
        await expect(preCondition.submitBtn).toHaveText('Weiter')
    })

    it("Select change of insurer in Pre-condition", async () => {

        //Selecting the option "Purchase or Change Of Owner"
        await preCondition.selectOption(data.selectPreCondition.changeOfInsurer.keepingCar.mainText)
        //Input today's date in Insurance Start Date
        await preCondition.enterInsStartDate(await utility.getDate(1))
        //Click on Submit Button
        await preCondition.submitBtn.click()
    })

    it("Verify Placeholder and Title in SelectRegisteredOwner Page", async () => {

        //Verifying the text for the question in Registered Owner Page
        await expect(registeredOwner.carOwnerQstnTitle).toHaveText(data.selectPreCondition.changeOfInsurer.selectRegOwner.carOwner.title)
        //Verifying the values text
        await expect(registeredOwner.selectCarOwner("yes")).toHaveText(data.selectPreCondition.changeOfInsurer.selectRegOwner.carOwner.values[0])
        await expect(registeredOwner.selectCarOwner("no")).toHaveText(data.selectPreCondition.changeOfInsurer.selectRegOwner.carOwner.values[1])
        //Verifying the text for car Status
        await expect(registeredOwner.carStatusTitle).toHaveText(data.selectPreCondition.changeOfInsurer.selectRegOwner.carStatus.title)
        //Verifying the text for Submit Button
        await expect(preCondition.submitBtn).toHaveText('Weiter')
    })

    it("Select: Car is Registered to self and used at Purchase", async () => {
        
        //Clicking on Submit Button
        await registeredOwner.submitBtn.click()
    })

    it("Verify Placeholder and Title in SelectVehicle Page", async () => {

        //Verify the title in Select Vehicle page
        await expect(selectVehicle.title).toHaveText(data.selectPreCondition.changeOfInsurer.selectVehicle.title)
    })

    it("Select Ford as the car Brand", async () => {

        //Clicking on find by model tab in select Vehicle Page
        await selectVehicle.findByModel.click()
        //Verfify the placeholder of search box
        await expect(selectVehicle.inputCarBrand).toHaveAttributeContaining('placeholder','Automarke eingeben')
        //Input text "Ford" in the search box
        await selectVehicle.enterCarBrand("Ford")
        //Select the option available after entering Ford in search box
        await selectVehicle.selectCarBrand()
    })

    it("Verify Placeholder and Title in SelectModel Page", async () => {
        
        //Verify the text of the title in select model page
        await expect(selectModel.title).toHaveText(data.selectPreCondition.changeOfInsurer.selectModel.title)
        //Verify the placeholder value of search box
        await expect(selectModel.modelField).toHaveAttribute('placeholder', data.selectPreCondition.changeOfInsurer.selectModel.searchBox.placeholder)
    })


    it("Select Ecosport as the Model of car Brand : Ford", async () => {

        //Input text in search box
        await selectModel.inputCarModel('ecosport')
        await selectModel.selectCarModel()
    })



    it("Select Diesel as Fuel Type", async () => {

        //Select Diesel as the Fuel type
        await selectFuel.selectFuelType(data.selectPreCondition.changeOfInsurer.selectFuelType.values[1])
    })

    it("Verify the Title in SelectEnginePower Page", async () => {

        //Verify the text of the title in Select Engine Power Page
        await expect(enginePower.title).toHaveText(data.selectPreCondition.changeOfInsurer.selectEnginePower.title)
    })

    it("Select Engine Power for the Ecosport Car", async () => {
        
        //Select the engine Power
        await enginePower.selectEngPower(data.selectPreCondition.changeOfInsurer.selectEnginePower.values[2])
    })

    it("Verify the Title in SelectEngine Page", async () => {
        
        //Verify the text of the title in Select Engine Page
        await expect(engine.title).toHaveText(data.selectPreCondition.changeOfInsurer.selectEngine.title)
    })


    it("Select Engine for the Ecosport Car", async () => {

        //Select the engine
        await engine.selectEngine.click()
    })

    it("Verify Placeholder and Title in Registration Page", async () => {

        //Verify the text of first Registration Date
        await expect(registrationDate.firstRegDateQuesnTitle).toHaveText(data.selectPreCondition.changeOfInsurer.regDate.firstReg.title)
        //Verify the label of First Registration Date
        await expect(registrationDate.firstRegDateLabel).toHaveText(data.selectPreCondition.changeOfInsurer.regDate.firstReg.label)
        //Verify the placeholder of first Registration date field
        await expect(registrationDate.inputfirstRegDate).toHaveAttribute('placeholder', 'MM.JJJJ')
        //Verify the text of Car Owner Registration Date
        await expect(registrationDate.carOwnerRegDateQuesnTitle).toHaveText(data.selectPreCondition.changeOfInsurer.regDate.carPurchaseDate.title)
        //Verify the label of Car Ower Registration Date
        await expect(registrationDate.carOwnerRegDateLabel).toHaveText(data.selectPreCondition.changeOfInsurer.regDate.carPurchaseDate.label)
        //Verify the placeholder of Car owner Registration date field
        await expect(registrationDate.inputCarOwnerRegDate).toHaveAttribute('placeholder', 'MM.JJJJ')
    })

    it("Enter First Registration Date", async () => {

        //Input date in first registration date field
        await registrationDate.enterFirstRegDate("01.2022")
        //Input date in Car Owner registration date field
        await registrationDate.enterCarOwnerRegDate("01.2022")
        await registrationDate.submitBtn.click()
    })

})
