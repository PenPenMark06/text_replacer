/**
 * This Extension replaces all the occurence of words Porn, Boobs, Breast, Chest
 * into a word PornHub, which is also a link to the website Pornhub.com
 * 
 * I know how guys get horny whenever we see a word boob, and this extension helps people
 * saving time typing pornhub.com on the searching bar
 * 
 * More generally, you can treat this extension as a replacer of any text on the webpage
 * with a link to some other website.
 */

var elements = document.getElementsByTagName('*');
var regex = /Porn | Boobs | Breast | Chest | Oppai/gi;

Array.from(elements).forEach((element) => {
    element.childNodes.forEach((child) => {
        if(child.nodeType === 3) {
            var text = child.textContent;
            var replacedText = text.replace(regex, '<a href="https://www.pornhub.com/"> PornHub </a>');
            if (replacedText !== text) {
                let newSpan = document.createElement('span');
                newSpan.innerHTML = replacedText;
                element.replaceChild(newSpan, child);
            }
        }
    });
});

/**
 * On the other hand, this also replaces the specific word's occurence, but with text only.
 * You might find this function helpful if you want to simply replace text with another text
 * on your favor.
 */

// Array.from(elements).forEach((element) => {
//     element.childNodes.forEach((child) => {
//         if(child.nodeType === 3) {
//             var text = child.textContent;
//             var replacedText = text.replace(/Replacing word/gi, 'Any words you wish to replace with');
//
//             if (replacedText !== text) {
//                 element.replaceChild(document.createTextNode(replacedText), child);
//             }
//         }
//     });
// });
