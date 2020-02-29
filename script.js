const button = document.querySelector('.switch__btn')

function toggler() {   
    const basic = document.querySelector('#basic-price');
    const pro = document.querySelector('#pro-price');
    const master = document.querySelector('#master-price');
        
    button.classList.toggle('switch__btn_on');

    if (button.classList.contains('switch__btn_on')){
        basic.textContent = '$199.99'
        pro.textContent = '$249.99'
        master.textContent = '$399.99'
    }
    else {
        basic.textContent = '$19.99'
        pro.textContent = '$24.99'
        master.textContent = '$39.99'
    }
}

button.addEventListener('click', toggler);
