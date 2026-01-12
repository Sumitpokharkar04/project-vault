btn.addEventListener("click", ()=>{


 async function main() {

    async function initializeTerminal() {
        return new Promise((resolve) => {
            setTimeout(() => {
                document.querySelector('.box').innerText = "Hacking Terminal Initialized...";
                resolve();
            }, Math.floor(Math.random() * 6001) + 1000);

        });
    }


    async function startHacking() {
        return new Promise((resolve) => {
            setTimeout(() => {
                document.querySelector('.box').innerText = "Hacking in Progress...";
                resolve();
            }, Math.floor(Math.random() * 6001) + 1000);
        });
    }


    async function bypassSecurity() {
        return new Promise((resolve) => {
            setTimeout(() => {
                document.querySelector('.box').innerText = "Bypassing firewall...";
                resolve();
            }, Math.floor(Math.random() * 6001) + 1000);

        });
    }

    async function searchPasswords() {
        return new Promise((resolve) => {
            setTimeout(() => {
                document.querySelector('.box').innerText = "Searching for passwords...";
                resolve();
            }, Math.floor(Math.random() * 6001) + 1000);


        });
    }

    async function extractData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                document.querySelector('.box').innerText = "Extracting data...";
                resolve();
            }, Math.floor(Math.random() * 6001) + 1000);

        });
    }

    async function completeExtraction() {
        return new Promise((resolve) => {
            setTimeout(() => {
                document.querySelector('.box').innerText = "Extraction completed";
                resolve();
            }, Math.floor(Math.random() * 6001) + 1000);

        })
    }

    await initializeTerminal();
    await startHacking();
    await bypassSecurity();
    await searchPasswords();
    await extractData();
    await completeExtraction();

}

main();

click();
})

