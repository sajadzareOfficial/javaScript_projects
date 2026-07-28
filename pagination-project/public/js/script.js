const listItems = [
    { id: 1, name: 'Amin', family: 'Saeedi Rad' },
    { id: 2, name: 'Amir', family: 'Zehtab' },
    { id: 3, name: 'Qadir', family: 'Yolme' },
    { id: 4, name: 'Babak', family: 'Mohammadi' },
    { id: 5, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 6, name: 'mamali', family: 'mamalifar' },
    { id: 7, name: 'jusem', family: 'jusemFar' },
    { id: 8, name: 'abdol', family: 'kosofi' },
    { id: 9, name: 'narges', family: 'Mohammadi' },
    { id: 10, name: 'Hesam', family: 'Ghahreman Zadeh' },

    { id: 11, name: 'Saeed', family: 'Ehsani' },
    { id: 12, name: 'Siamak', family: 'Modiri' },
    { id: 13, name: 'Mohsen', family: 'Ansari' },
    { id: 14, name: 'Mehran', family: 'Ali Pour' },
    { id: 15, name: 'Amir Hossein', family: 'Mahtabi' },

    { id: 16, name: 'Hossein', family: 'Amino' },
    { id: 17, name: 'Melika', family: 'Ehsani' },
    { id: 18, name: 'Qadir', family: 'Yolme' },
    { id: 19, name: 'Fatemeh', family: 'Alilou' },
    { id: 20, name: 'Ehsan', family: 'Tayyebi' },

    { id: 21, name: 'Zahra', family: 'Gholami' },
    { id: 22, name: 'Matin', family: 'Sahebi' },


];
let Current_Page = 1
let ManyPageElem = 5;
const $ = document;
const Pages_container = $.querySelector(".Pages_container");
const items = $.querySelector(".items");
let lastClickeed = 0;
function Pageination_Btn_Generator(listItems, ManyPageElem) {
    let NumberOfPages = Math.ceil(listItems.length / ManyPageElem)
    for (let i = 1; i < NumberOfPages + 1; i++) {
        let BtnElem = $.createElement("div")
        BtnElem.classList = "page flex justify-center items-center border-2 rounded-xl border-purple-800 text-2xl bg-purple-100 w-1/5 h-full";
        BtnElem.innerHTML = i
        Pages_container.appendChild(BtnElem)


        BtnElem.addEventListener("click", function (event) {
            removeActiveClass()
            event.target.classList.add('activeBtn')
            let extractItems = listItems.slice((event.target.innerHTML * ManyPageElem - ManyPageElem), (event.target.innerHTML * ManyPageElem))


            while (items.firstChild) {
                items.firstChild.remove()
            }
            console.log();

            for (let item of extractItems) {
                items.insertAdjacentHTML('beforeend', `<li class=" text-blue-500  w-5/8 border-4
             border-purple-100 flex items-center justify-center
              h-15 bg-amber-50  rounded-sm md:text-xl">
             <span class="ml-2 text-red-400">
             id:
             </span>${item.id} 
             <span class="ml-2 text-red-400">
             name: 
             </span>${item.name} 
             <span class="ml-2 text-red-400">family: 
             </span> ${item.family}   
            </li>`)
            }

        })

    }
}

function removeActiveClass() {
    for (let item of Pages_container.children) {
        if (item.classList.contains("activeBtn")) {

            item.classList.remove("activeBtn")
        }
    }
}
Pageination_Btn_Generator(listItems, ManyPageElem)