"use strict";

for (let n = 2; n <= 10; n += 2) {
    alert(n);
}

function delay(ms) {
    return new Promise(function
        (resolve, reject) {
            setTimeout(resolve, ms);
        }
    )
}