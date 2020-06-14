document.querySelector('.form-div').addEventListener('submit',(e)=>{
    e.preventDefault();

    const website_name = document.querySelector('.name-input').value;
    const website_URL = document.querySelector('.URL-input').value;

    if(Authentication.validateName(website_name) && Authentication.validateURL(website_URL)){
    const bookmark_holding_div = document.querySelector('.bookmark_tab_main_div');

    const main_bookmark_holding_div = document.createElement('div');
    main_bookmark_holding_div.className='bookmark_tab_divs';
    
    main_bookmark_holding_div.innerHTML =
    `
    <span id="name_of_bookmark">${website_name}</span><button class="delete_button">Delete</button>
    <a id="visit_button" target="blank" href="${website_URL}">Visit</a>
    `
    ;

    bookmark_holding_div.appendChild(main_bookmark_holding_div);

    document.querySelector('.name-input').value = '';
    document.querySelector('.URL-input').value = '';
    }
})


document.querySelector('.bookmark_tab_main_div').addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete_button')){
        e.target.parentElement.remove();
    }
})

class Authentication{
    static validateName(name){
        const name_regex = /^[a-zA-Z]{1,50}[a-zA-Z0-9]{0,50}$/
        if(name_regex.test(name)){
            return true;
        }
        else{
            alert('In The Name Field, the name must start with an alphabet, can have digits in between, and no specical characters are allowed');
            return false;
        }
    }
    static validateURL(URL){
        const url_regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/

        if(url_regex.test(URL)){
            if(URL[URL.length-1] == 'm' && URL[URL.length-2] == 'o' && URL[URL.length-3] == 'c'
             && URL[URL.length-4] == '.' ){
                return true;
            }
            else{
                alert('In The URL Field, the URL must be in the format https://www.YourWebsiteName.com');
                return false;
            }
        }
        else{
            alert('In The URL Field, the URL must be in the format https://www.YourWebsiteName.com');
            return false;
        }
    }   
}