// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const { describe } = require('node:test')

describe('TestMatriz', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('TestMatriz', async function() {
    await driver.get("http://192.168.20.9:3000/")
    await driver.manage().window().setRect({ width: 1296, height: 500 })
    await driver.findElement(By.css("div:nth-child(2) > span")).click()
    await driver.findElement(By.css("tr:nth-child(1) > td:nth-child(1)")).click()
    await driver.findElement(By.css("tr:nth-child(2) > td:nth-child(1)")).click()
    await driver.findElement(By.css("tr:nth-child(3) > td:nth-child(1)")).click()
   
  })

  let primeraFila=[23,50,63,90,10,30,155,23,18]
  let sumaIndiceDer1=primeraFila[0] + primeraFila[1] + primeraFila[2] + primeraFila[3]
  let sumaIndiceDer2=primeraFila[5] + primeraFila[6] + primeraFila[7] +primeraFila[8]
 

  function calcularPrimeraFila(primeraFila,sumaIndiceDer1,sumaIndiceDer2){

    if(sumaIndiceDer1==sumaIndiceDer2){
      return primeraFila.indexOf(10)
    }else{
      return 0
    }
  }

    let segundaFila=[133,60,23,92,6,7,168,16,19]
    let sumaIndiceDer3=segundaFila[0] + segundaFila[1] + segundaFila[2] 
    let sumaIndiceDer4=segundaFila[4] + segundaFila[5] + segundaFila[6] +segundaFila[7] + segundaFila[8]

  function calcularSegundaFila(sumaIndiceDer3,sumaIndiceDer4){
    
    if(sumaIndiceDer3==sumaIndiceDer4){
      return sumaIndiceDer3
    }else{
      return 0
    }
  }

  let terceraFila=[30,43,29,10,50,40,99,51,12]
  let sumaIndiceDer5=terceraFila[0] +terceraFila[1] + terceraFila[2] + terceraFila[3]
  let sumaIndiceDer6=terceraFila[6] +terceraFila[7] + terceraFila[8] 
  
  function calcularTerceraFila(sumaIndiceDer5,sumaIndiceDer6){
    if(sumaIndiceDer5==sumaIndiceDer6){
      return sumaIndiceDer5
    }else{
      return 0
    }
    
  }
})
