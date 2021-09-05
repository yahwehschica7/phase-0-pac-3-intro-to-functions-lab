function shout(string) {
    return string.toUpperCase();
}

shout("hello")

function whisper(string) {
    return string.toLowerCase();
}

whisper("hello")



function logShout(string) {
    const spy = string.toUpperCase();
    console.log(spy);
   }

logShout("hello")
 
function logWhisper(string) {
    const spy = string.toLowerCase();
    console.log(spy);
    }

logWhisper("HELLO")

function sayHiToGrandma(string) {

    if (string === "I love you, Grandma.") {
        return "I love you, too.";
    }
    if (string.toUpperCase() === string) {
        return "YES INDEED!";
    }
    if (string.toLowerCase()=== string) {
        return "I can't hear you!";
    }
}    
 
sayHiToGrandma("I love you, Grandma.") 



