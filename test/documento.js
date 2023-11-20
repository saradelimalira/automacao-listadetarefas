const { Builder, By,  Key } = require("selenium-webdriver")

var should = require("chai").should();

async function example() {
   
    let driver = await new Builder().forBrowser("firefox").build()
    


    await driver.get("https://herziopinto.github.io/lista-de-tarefas/")

    await driver.sleep (2000)

    //lista 
    let lista = ["Acordar", "Escovar os dentes", "Tomar cafe", "Arrumar a cama", "estudar", "Fazer almoco", "Organizar a cozinha", "estudar", "Preparar a Janta", "Escovar os dentes", "Dormir"]

   

    await driver.findElement(By.id("inputTask")).sendKeys(lista[0], Key.RETURN)
    //
await driver.findElement(By.id("inputTask")).sendKeys(lista[1], Key.RETURN)
//
await driver.findElement(By.id("inputTask")).sendKeys(lista[2], Key.RETURN)
//
await driver.findElement(By.id("inputTask")).sendKeys(lista[3], Key.RETURN)
//
await driver.findElement(By.id("inputTask")).sendKeys(lista[4], Key.RETURN)
//
await driver.findElement(By.id("inputTask")).sendKeys(lista[5], Key.RETURN)
//
await driver.findElement(By.id("inputTask")).sendKeys(lista[6], Key.RETURN)
//
await driver.findElement(By.id("inputTask")).sendKeys(lista[7], Key.RETURN)
//
//
await driver.findElement(By.id("inputTask")).sendKeys(lista[8], Key.RETURN)
//
await driver.findElement(By.id("inputTask")).sendKeys(lista[9], Key.RETURN)
//
await driver.findElement(By.id("inputTask")).sendKeys(lista[10], Key.RETURN)
//
await driver.findElement(By.id("inputTask")).sendKeys(lista[11], Key.RETURN)

   

    

    // Assertion
let seleniumText = [];
for (let i = 0; i < lista.length; i++) {
    seleniumText[i] = await driver.findElement(By.xpath("/html/body/div/section/ul/li/label")).getText().then(function(value){
        return value [i]
    })

    // 3) Assertion usando chai para as tarefas
    seleniumText[i].should.equal(lista[i]);
}
//fechar
await driver.quit()
}
example()