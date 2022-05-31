const getEl = document.querySelector('.present');

(function myFunc(){
    if(prompt('გიყვარვარ? კი თუ არა') === 'კი'){
       return getEl.classList.remove('hidden')
    }else{
        return myFunc()
    }
})()


