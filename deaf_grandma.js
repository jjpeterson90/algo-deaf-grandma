function deafGrandma() {

    const isUpperCase = function(reply) {
        for (let i = 0; i < reply.length; i++) {
            if (reply[i] === reply[i].toLowerCase()) return false;
            if (i === reply.length-1) return true;
        }
    }

    const randomYear = function() {
        let num = Math.random() * (1955 - 1935) + 1935;
        return Math.floor(num)
    }

    let message = "HEY, KID!";
    let reply;
    let goodbye = 0;

    const grandmaSpeak = function(message) {
        reply = prompt(message);

        if (reply === "GOODBYE!" && goodbye === 1) {
            window.prompt("LATER, SKATER!");
            return;
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
        grandmaSpeak(message);
    }

    grandmaSpeak(message);

}

deafGrandma();