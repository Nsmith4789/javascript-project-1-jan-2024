//let geussWho = function (hasGlasses, isBald, hasEarring, hasTattoo) 

//let isNick = hasGlasses && hasTattoo && !isBald && hasEarring;
// let isTim = !hasGlasses && !hasTattoo && //

geusseButton.onclick = function () {
    //alert("Can You Geuss Who")
    let isBald = baldCheckbox.checked
    let hasTattoo = tattooCheckbox.checked
    let hasEarring = earringCheckbox.checked
    let hasGlasses = glassesCheckbox.checked
    //alert(hasGlasses)
    let isNick = hasGlasses && hasTattoo && !isBald && hasEarring;
    let isTim = !hasGlasses && !hasTattoo && !isBald && hasEarring;
    let isCaleb = hasGlasses && hasTattoo && !isBald && !hasEarring;
    let isGary = hasGlasses && !hasTattoo && !isBald && !hasEarring;
    //alert(isNick)
    if (isNick) {
        alert("Im am Nick")
        vacaImg.src = "flash.jpeg";
        geussBody.style.backgroundColor = "blue"
    } else if (isTim) {
        alert("i am tim")
        vacaImg.src = "allmight.jpeg";
        geussBody.style.backgroundColor = "red"
    } else if (isCaleb) {
        alert("I am Caleb")
        vacaImg.src = "greenlantern.jpeg";
        geussBody.style.backgroundColor = "green"
    } else if (isGary) {
        alert("I Am Gary")
        vacaImg.src = "superman.jpeg";
        geussBody.style.backgroundColor = "yellow"
    } else {
        alert("unknown Person")
    }
}
