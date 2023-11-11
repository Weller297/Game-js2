// let buttonMoneyDecor = document.querySelector('.button__text-money')
let mainPage = document.querySelector('.main__page')
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
    setTimeout(() => {
        let parent = moneyDecor.parentNode
        parent.removeChild(moneyDecor)
    }, 950);
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
    let upgradeInfo = document.querySelector('.upgrade__info')
    let lvlText = document.querySelector('.lvl__text')
    let a = 1
    function upgradeUpgrade() {
        upgradeMain = upgradeMain + 1
        moneyInfo = moneyInfo - moneyCostOne
        moneyInfoFunction()
        moneyCostOne = Math.floor(moneyCostOne/100*135)
        upgradeCost.innerHTML = `Upgrade: ${moneyCostOne}$`
        lvlText.innerHTML = `lvl: ${a}`
        a += 1
        upgradeInfo.innerHTML = `Upgrade give you ${a}$ every second (Stacks!) `
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
        setTimeout(() => {
            let parent = upgradeError.parentNode
            parent.removeChild(upgradeError)
        }, 950);

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
    let lvlTextTwo = document.querySelector('.lvl__text-2')
    let b = 1
    function upgradeUpgradeTwoFunct() {
        clickMain = clickMain/100*120
        moneyInfo = moneyInfo - moneyCostTwo
        moneyInfoFunction()
        moneyCostTwo = Math.floor(moneyCostTwo/100*135)
        upgradeCostTwo.innerHTML = `Upgrade: ${moneyCostTwo}$`
        lvlTextTwo.innerHTML = `lvl: ${b}`
        b += 1
    }

    // function three
    function upgradeItemTwoError() {
        let upgradeError = document.createElement('p')
        upgradeError.innerHTML = `Not Enough!!!`
        upgradeItemTwo.append(upgradeError)
        upgradeError.classList.add('upgrade__error')
        setTimeout(() => {
            let parent = upgradeError.parentNode
            parent.removeChild(upgradeError)
        }, 950);
    }
    // Upgrade 3
    let upgradeItemThree = document.querySelector('.upgrade__item-3')
    let upgradeCostThree = document.querySelector('.upgrade__cost-3')
    let gifts = document.querySelector('.gift')
    upgradeItemThree.addEventListener('click', () => {
        upgradeItemThreeFunct()
    })
    // function one
    function upgradeItemThreeFunct() {
        if (moneyInfo >= moneyCostThree) {
            moneyInfoFunction()
            upgradeUpgradeThreeFunct()
        }else {
            upgradeItemThreeError()
        }
    }
    // function two
    let moneyCostThree = 700
    let lvlTextThree = document.querySelector('.lvl__text-3')

    function upgradeUpgradeThreeFunct() {
        moneyInfo = moneyInfo - moneyCostThree
        moneyInfoFunction()
        upgradeCostThree.innerHTML = `Upgrade: Max`
        lvlTextThree.innerHTML = `lvl: Max`
        giftChangeSpawn()
        moneyCostThree = moneyCostThree * 99999
    }

    // function three
    function upgradeItemThreeError() {
        let upgradeError = document.createElement('p')
        upgradeError.innerHTML = `Not Enough!!!`
        upgradeItemThree.append(upgradeError)
        upgradeError.classList.add('upgrade__error')
        setTimeout(() => {
            let parent = upgradeError.parentNode
            parent.removeChild(upgradeError)
        }, 950);
    }
    // function four
    function giftChangeSpawn() {
        function giftChangeSpawnIn() {
            giftbox()
            function getRandom(min, max) {
                return Math.round(Math.random() * (max - min) + min)
            }
            let a = getRandom(10000, 30000)  
            setTimeout(giftChangeSpawnIn, a)
        }
        setTimeout(giftChangeSpawnIn, a)
    }

 

    function giftbox() {
        function getRandom(min, max) {
          return Math.round(Math.random() * (max - min) + min)
        }
        let a = getRandom(1, 5)
        let b = getRandom(3, 20)
        let c = getRandom(5, 80)
        let d = getRandom(20, 50)

        let gift = document.createElement('div')
        let img = document.createElement('img')
        let text = document.createElement('p')
        text.classList.add('gift__text')
        img.src = `images/gifts-${a}.png`
        img.alt = 'Gift'
        gift.append(img)
        let size = 120
        gift.style.width = `${size}px`
        gift.style.height = `${size}px`
        img.style.width = `${size}px`
        img.style.height = `${size}px`
        gift.style.position = 'absolute'
        gift.style.bottom = `${b}%`
        gift.style.right = `${c}%`
        gift.style.cursor = 'pointer'
        mainPage.append(gift)
        

        img.addEventListener('click', () => {
            moneyInfo = moneyInfo + (clickMain * d)
            gift.style.cursor = 'default'
            buttonMoneyDecorThree()
            moneyInfoFunction()
            img.style.visibility = 'hidden'
            setTimeout(() => {
                gift.style.visibility = 'hidden'
            }, 1000);
        })
        function buttonMoneyDecorThree() {
          let moneyDecorThree = document.createElement('p')
          moneyDecorThree.innerHTML = `+${(clickMain * d).toFixed(2)}$`
          gift.append(moneyDecorThree)
          moneyDecorThree.classList.add('button__text-money')
          setTimeout(() => {
            let parent = moneyDecorThree.parentNode
            parent.removeChild(moneyDecorThree)
        }, 950);
      }
      }


      

    // Upgrade 4
    let upgradeItemFour = document.querySelector('.upgrade__item-4')
    let upgradeCostFour = document.querySelector('.upgrade__cost-4')
    upgradeItemFour.addEventListener('click', () => {
        upgradeItemFourFunct()
    })
    // function one
    function upgradeItemFourFunct() {
        if (moneyInfo >= moneyCostFour) {
            moneyInfoFunction()
            upgradeUpgradeFourFunct()
            upgradeFourBox.style.visibility = `visible`
        }else {
            upgradeItemFourError()
        }
    }
    // function two
    let moneyCostFour = 1000
    let lvlTextFour = document.querySelector('.lvl__text-4')

    function upgradeUpgradeFourFunct() {
        moneyInfo = moneyInfo - moneyCostFour
        moneyInfoFunction()
        moneyCostFour = Math.floor(moneyCostFour/100*135)
        upgradeCostFour.innerHTML = `Upgrade: Max`
        lvlTextFour.innerHTML = `lvl: Max`
        moneyCostFour = moneyCostFour * 99999

    }

    // function three
    function upgradeItemFourError() {
        let upgradeError = document.createElement('p')
        upgradeError.innerHTML = `Not Enough!!!`
        upgradeItemFour.append(upgradeError)
        upgradeError.classList.add('upgrade__error')
        setTimeout(() => {
            let parent = upgradeError.parentNode
            parent.removeChild(upgradeError)
        }, 950);
    }
    
// Upgrade
// Upgrade in main page
let upgradeFourBox = document.querySelector('.upgrade__four-box')
let upgradeFourCd = document.querySelector('.upgrade__four-cooldown')
let upgradeFourImg = document.querySelector('.upgrade__four-img')

function catFourTimeout() {
    catTimeout = 30
    upgradeFourCd.innerHTML = `Recharge: ${catTimeout}s` 
    function catFourTimeoutIn() {
        if (catTimeout <= 0) {
            upgradeFourCd.innerHTML = ``
            upgradeFourImg.style.filter = 'brightness(100%)'
            return 
        }else {
            catTimeout--
            upgradeFourCd.innerHTML = `Recharge: ${catTimeout}s` 
        }
        setTimeout(catFourTimeoutIn, 1000)
    }
    setTimeout(catFourTimeoutIn, 1000)
}

let catTimeout = 0
let upgradeLight = document.querySelector('.upgrade__light-box')
upgradeFourBox.addEventListener('click', () => {
    if (catTimeout <= 0) {
        upgradeFourBox.classList.add('upgrade__four-animation')
        setTimeout(() => {
            catFourTimeout()
            upgradeFourBox.classList.remove('upgrade__four-animation')
            upgradeFourCd.style.display = 'flex'
            upgradeFourImg.style.filter = 'brightness(50%)'
        }, 3000);
        setTimeout(() => {
            moneyInfo = moneyInfo + clickMain * 100
            moneyInfoFunction()
            buttonMoneyDecorFour()
            upgradeLight.style.visibility = 'visible'
            setTimeout(() => {
            upgradeLight.style.visibility = 'hidden'
            }, 250);
        }, 3500);
    }else {
        cooldownFourError()
    }
})
function buttonMoneyDecorFour() {
    let moneyDecorFour = document.createElement('p')
    moneyDecorFour.innerHTML = `+${(100 * clickMain).toFixed(2)}$`
    buttonBox.append(moneyDecorFour)
    moneyDecorFour.classList.add('button__text-money')
    setTimeout(() => {
        let parent = moneyDecorFour.parentNode
        parent.removeChild(moneyDecorFour)
    }, 950);
}
function cooldownFourError() {
    let upgradeError = document.createElement('p')
    upgradeError.innerHTML = `Recharge!!!`
    upgradeFourBox.append(upgradeError)
    upgradeError.classList.add('upgrade__error-four')
}

// Auto cat in a trolley

// Upgrade in main page


// Shop
let shopIconBox = document.querySelector('.shop__box')
let shop = document.querySelector('.shop')
let shopBoxText = document.querySelector('.shop__box-text')
shopIconBox.addEventListener('click', () => {
    if (shop.style.visibility == 'visible') {
        shop.style.visibility = 'hidden'
        shopBoxText.innerHTML = 'Shop'
    }else {
        shop.style.visibility = 'visible'
        shopBoxText.innerHTML = 'Back'
        
    }
})

// Shop



// Raid
let attackBox = document.querySelector('.attack__box')
let raidText = document.querySelector('.raid__text')

raidChance()

function raidChance() {
    function getRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }
    let chance = getRandom(0, 10)
    if (chance == 5) {
        raidText.style.visibility = 'visible'
        setTimeout(() => {
            raidText.style.visibility = 'hidden'

            raidAttacks()
        }, 5000);
    }
    setTimeout(raidChance, 10000)
}
function raidAttacks() {
    let i = 50
    setInterval(() => {
        if (i > 0) {
            attackSpawnVertical()
            setTimeout(() => {
                attackSpawnHorizontally()    
            }, 50);
            i--
        }else {
            return
        }
    }, 100);
}


function attackSpawnVertical() {
    let attack = document.createElement('div')
    let warning = document.createElement('div')
    warning.classList.add('raid__warning-vertical')
    attack.classList.add('attack')
    attack.classList.add('raid__attack-vertical')

    function getRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }
    let y = getRandom(5, 95)
    let a = getRandom(1, 20)

    warning.style.left = `${y+0.5}%`
    warning.style.top = `${0}%`
    setTimeout(() => {
        attack.style.left = `${y}%`
        attack.style.top = `${0}%`
        
    }, 1000);

    mainPage.append(attack)
    mainPage.append(warning)
    setTimeout(() => {
        let parent = attack.parentNode
        parent.removeChild(attack)
        let parentTwo = warning.parentNode
        parentTwo.removeChild(warning)
    }, 2000);
    attack.addEventListener('mouseover', () => {
        moneyInfo = moneyInfo - a
        moneyInfoFunction()
    })
}

function attackSpawnHorizontally() {
    let attack = document.createElement('div')
    let warning = document.createElement('div')
    warning.classList.add('raid__warning-horizontally')
    attack.classList.add('attack')
    attack.classList.add('raid__attack-horizontally')

    function getRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }
    let x = getRandom(5, 95)
    let a = getRandom(1, 20)
    warning.style.top = `${x+0.5}%`
    setTimeout(() => {
    attack.style.top = `${x}%`
    }, 1000);

    mainPage.append(attack)
    mainPage.append(warning)
    setTimeout(() => {
        let parent = attack.parentNode
        parent.removeChild(attack)
        let parentTwo = warning.parentNode
        parentTwo.removeChild(warning)
    }, 2000);

    attack.addEventListener('mouseover', () => {
        moneyInfo = moneyInfo - a
        moneyInfoFunction()
    })
}

// Raid

