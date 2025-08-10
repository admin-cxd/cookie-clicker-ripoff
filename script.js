let points = 0
let clickValue = 1
let upgradeCost = 10
let autoClickers = 0
let autoCost = 50

function updateDisplay() {
  document.getElementById("counter").textContent = points
  document.getElementById("upgradeCost").textContent = upgradeCost
  document.getElementById("autoCost").textContent = autoCost
  document.getElementById("cps").textContent = autoClickers * clickValue
}

function inc() {
  points += clickValue
  updateDisplay()
}

function buyUpgrade() {
  if (points >= upgradeCost) {
    points -= upgradeCost
    clickValue++
    upgradeCost = Math.floor(upgradeCost * 1.5)
    updateDisplay()
  }
}

function buyAutoclicker() {
  if (points >= autoCost) {
    points -= autoCost
    autoClickers++
    autoCost = Math.floor(autoCost * 1.5)
    updateDisplay()
  }
}

setInterval(() => {
  if (autoClickers > 0) {
    points += autoClickers * clickValue
    updateDisplay()
  }
}, 1000)

updateDisplay()
