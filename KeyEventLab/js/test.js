const body = document.body;
const ads = document.querySelector('.ads');
const h1Elem = document.querySelector('.h1');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
// ------;
const event_key = document.getElementById('event_key');
const event_location = document.getElementById('event_location');
const event_which = document.getElementById('event_which');
const event_code = document.getElementById('event_code');
// ---;
body.addEventListener('keypress',function(event){;
    console.log(event);
    h1Elem.innerHTML = event.keyCode 
    event_key.innerHTML = event.key;
    event_code.innerHTML= event.code;
    event_location.innerHTML = event.location;
    event_which.innerHTML = event.keyCode;
;
});
;
// ----;
function remove_ads(){;
    ads.style.display = 'none';
    main.style.display = 'flex';
    footer.style.display = 'flex';
};
ads.addEventListener('click',remove_ads);
// 