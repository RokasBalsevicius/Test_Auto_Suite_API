
function random4DigitNumberGenerator() {
    return Math.floor(Math.random() * 9000) + 1000;
};

function randomNameGenerator() {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let name = "";
    for(let i = 0; i < 7; i++){
        const randomIndex = Math.floor(Math.random() * letters.length);
        name += letters[randomIndex]
    };
    return name;
};

function categoryIdGenerator() {
    const categoryIds = [0, 1, 2, 3, 4];
    return categoryIds[Math.floor(Math.random() * categoryIds.length)];
};

function randomStatusSelector() {
    const statuses = ["pending", "available", "sold"];
    return statuses[Math.floor(Math.random() * statuses.length)];
}

module.exports = {
    random4DigitNumberGenerator, 
    randomNameGenerator, 
    categoryIdGenerator, 
    randomStatusSelector
};