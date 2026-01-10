async function main(){

async function initializeTerminal() 
{
   return new Promise( setInterval(() =>{
        document.querySelector('.container').innerText = "Hacking Terminal Initialized...";
    } ,Math.floor(Math.random() * 6001) + 1000
));
}

async function startHacking()
{
    setTimeout(() => {
        document.querySelector('.container').innerText = "Hacking in Progress...";
},Math.floor(Math.random() * 6001) + 1000);
}

async function bypassSecurity()
{
    setTimeout(() => {
        document.querySelector('.container').innerText = "Bypassing firewall...";
},Math.floor(Math.random() * 6001) + 1000);
}

async function searchPasswords()
{
    setTimeout(() => {
        document.querySelector('.container').innerText = "Searching for passwords...";
},Math.floor(Math.random() * 6001) + 1000);
}

async function extractData()
{
    setTimeout(() => {
        document.querySelector('.container').innerText = "Extracting data...";
},Math.floor(Math.random() * 6001) + 1000);
}

async function completeExtraction()
{
    setTimeout(() => {
        document.querySelector('.container').innerText = "Extraction completed";
},Math.floor(Math.random() * 6001) + 1000);
}

initializeTerminal();
startHacking();
bypassSecurity();
searchPasswords();
extractData();
completeExtraction();

}

main();