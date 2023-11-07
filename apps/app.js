// let buttonMoneyDecor = document.querySelector('.button__text-money')

// Money
let clickMain = 1
let moneyInfoNumber = document.querySelector('.money__info-number')
let moneyInfo = 0
moneyInfoNumber.innerHTML = moneyInfo + '$'

function moneyInfoFunction() {
    moneyInfoNumber.innerHTML = moneyInfo.toFixed(2) + '$'
}
// Money
// Button
let button = document.querySelector('.button__box')
let buttonBox = document.querySelector('.button__box')
button.addEventListener('click', () => {
    moneyInfo = moneyInfo + clickMain
    buttonMoneyDecor()
    moneyInfoFunction()
})


function buttonMoneyDecor() {
    let moneyDecor = document.createElement('p')
    moneyDecor.innerHTML = `+${clickMain.toFixed(2)}$`
    buttonBox.append(moneyDecor)
    moneyDecor.classList.add('button__text-money')
}
// Button
// Upgrade
let upgradeMain = 0
let upgradeItem = document.querySelector('.upgrade__item')
let upgradeCost = document.querySelector('.upgrade__cost')
    upgradeItem.addEventListener('click', () => {
        upgradeItemOne()
    })
    // function one
    function upgradeItemOne() {
        if (moneyInfo >= moneyCostOne) {
            moneyInfoFunction()
            upgradeUpgrade()
        }else {
            upgradeItemOneError()
        }
    }
    // function two
    let moneyCostOne = 100
    function upgradeUpgrade() {
        upgradeMain = upgradeMain + 1
        moneyInfo = moneyInfo - moneyCostOne
        moneyInfoFunction()
        moneyCostOne = Math.floor(moneyCostOne/100*135)
        upgradeCost.innerHTML = `Cost: ${moneyCostOne}$`
    }
    setInterval(() => {
        moneyInfo = moneyInfo + upgradeMain
        moneyInfoFunction()            
    }, 1000);

    // function three
    function upgradeItemOneError() {
        let upgradeError = document.createElement('p')
        upgradeError.innerHTML = `Not Enough!!!`
        upgradeItem.append(upgradeError)
        upgradeError.classList.add('upgrade__error')
    }


    //Upgrade 2
    let upgradeItemTwo = document.querySelector('.upgrade__item-2')
    let upgradeCostTwo = document.querySelector('.upgrade__cost-2')
    upgradeItemTwo.addEventListener('click', () => {
        upgradeItemTwoFunct()
    })
    // function one
    function upgradeItemTwoFunct() {
        if (moneyInfo >= moneyCostTwo) {
            moneyInfoFunction()
            upgradeUpgradeTwoFunct()
        }else {
            upgradeItemTwoError()
        }
    }
    // function two
    let moneyCostTwo = 300
    function upgradeUpgradeTwoFunct() {
        clickMain = clickMain/100*120
        moneyInfo = moneyInfo - moneyCostTwo
        moneyInfoFunction()
        moneyCostTwo = Math.floor(moneyCostTwo/100*135)
        upgradeCostTwo.innerHTML = `Cost: ${moneyCostTwo}$`
    }

    // function three
    function upgradeItemTwoError() {
        let upgradeError = document.createElement('p')
        upgradeError.innerHTML = `Not Enough!!!`
        upgradeItemTwo.append(upgradeError)
        upgradeError.classList.add('upgrade__error')
    }
// Upgrade


