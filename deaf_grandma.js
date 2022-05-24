function deafGrandma() {

    const isUpperCase = function(reply) {
        reply.forEach(elem => {
            if (elem === elem.toLowerCase()) return false;
        })
        return true;
    }

    const randomYear = function() {
        let num = Math.random() * (1955 - 1935) + 1935;
        return Math.floor(num)
    }

    let message = "HEY, KID!";
    let repeat = true;

    while (repeat === true) {
        let reply = prompt(message);

        if (reply === "GOODBYE!" && goodbye === 1) {
            message = "LATER, SKATER!";
            repeat = false;
        } else if (reply === "GOODBYE!") {
            message = "LEAVING SO SOON?";
            goodbye++;
        } else if (isUpperCase(reply) === true) {
            message = `NO, NOT SINCE ${randomYear()}`;
        } else if (isUpperCase(reply) === false) {
            message = "SPEAK UP, KID!";
        } else {
            message = "WHAT?!"
        }
    }

}

deafGrandma();