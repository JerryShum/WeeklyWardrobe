// Styles
// "Vintage", "Smart Casual", "Sporty", "Formal", "Party"
class StyleLevels {
    constructor(vintageLvl, smartCasualLvl, sportyLvl, formalLvl, partyLvl) {
        this.vintageLvl = vintageLvl;
        this.smartCasualLvl = smartCasualLvl;
        this.sportyLvl = sportyLvl;
        this.formalLvl = formalLvl;
        this.partyLvl = partyLvl;
    }
}

const calculateMatchPercent = (usersStyleObj, clothingStyleObj) => {
    let matchPercent = 0;
    matchPercent += Math.abs(usersStyleObj.vintageLvl - clothingStyleObj.vintageLvl);
    matchPercent += Math.abs(usersStyleObj.smartCasualLvl - clothingStyleObj.smartCasualLvl);
    matchPercent += Math.abs(usersStyleObj.sportyLvl - clothingStyleObj.sportyLvl);
    matchPercent += Math.abs(usersStyleObj.formalLvl - clothingStyleObj.formalLvl);
    matchPercent += Math.abs(usersStyleObj.partyLvl - clothingStyleObj.partyLvl);

    matchPercent = 100 - (matchPercent / 20) * 100;
    return matchPercent;
}

module.exports = { StyleLevels, calculateMatchPercent };