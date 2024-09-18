var date = new Date();

bool mourn = isTheDate(12, 13) || isTheDate(5, 12) || isTheDate(9, 18);
if (mourn) {
    document.styleSheets[1].insertRule("html{filter:grayscale(1);-webkit-filter: grayscale(100%);-moz-filter: grayscale(100%);-ms-filter: grayscale(100%);-o-filter: grayscale(100%);}");
}

function isTheDate(month, date) {
    return date.getDate() === date && date.getMonth() === month;
}
