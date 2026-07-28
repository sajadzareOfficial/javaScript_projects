
export class FormHandler {
    constructor() {

        this.cookieGeter()
    }

    async cookieSeter(data = false) {
        try {
             this.FormData = data ? data : await this.formData();
            console.log(this.FormData);

            for (let item of this.FormData) {

                document.cookie = item
            }
            location.reload()
        }
        catch (error) {
            alert(error)

        }
        let cookieData = ``;

    }
    async cookieGeter() {
        const cookieData = document.cookie;
        let cookieSpleated = cookieData.split(';')[0];
        let finalUsername = cookieSpleated.split('=')[1]



        if (cookieData) {

            document.querySelector('main').remove();

            await document.querySelector('header').insertAdjacentHTML('afterend', `<main class="w-full flex flex-col min-h-4/5 items-center italic justify-center relative text-2xl  bg-Body">
                <h1>HI <span class=" font-bold text-white "> ${finalUsername}</span> WELCOME BACK !</h1>
                
                <button class="text-sm mt-10  ring-white ring-2 px-3.5 py-3 rounded-sm bg-blue-300" id="clearCookie__btn" type="button">exit from site</button>
                </main>`)

            document.getElementById('clearCookie__btn').addEventListener('click', event => {
                event.target.classList.add("animate-ping");
                setTimeout(item => event.target.classList.remove("animate-ping"), 1000)
                this.clearCookies(event)
            })

        }
    }
    clearCookies(event) {
        
        let prevData = [`userName=;expires=Fri, 31 Dec 1999 23:59:59 GMT;`,
        `userFamily=;expires=Fri, 31 Dec 1999 23:59:59 GMT;`,
        ]
        console.log(prevData);

        this.cookieSeter(prevData)

    }
    async formData() {
        const time = 'expires=Fri, 31 Dec 2026 23:59:59 GMT;'
        return [`userName=${document.forms['MainForm']['userName'].value};${time}`,
        `userFamily=${document.forms['MainForm']['userFamily'].value};${time}`,
        ]
    }

}
