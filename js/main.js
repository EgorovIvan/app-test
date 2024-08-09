$(document).ready(function () {

  // Create Popup
  window.openCreatePopup = function () {
    $.fancybox.open({
      src: '#create-popup',
      type: 'inline',
      toolbar: false
    });
  }

  window.closeCreatePopup = function () {
    $.fancybox.close({
      src: '#create-popup',
      type: 'inline',
      toolbar: false
    });
  }

  let btnCreatePopup = document.getElementById('create-location')
  let btnCloseCreatePopup = document.getElementById('close__create-popup')

  btnCreatePopup.addEventListener("click", function(){
    openCreatePopup()
  })

  btnCloseCreatePopup.addEventListener("click", function(){
    closeCreatePopup()
  })

  // Update Popup
  window.openUpdatePopup = function () {
    $.fancybox.open({
      src: '#update-popup',
      type: 'inline',
      toolbar: false
    });
  }

  window.closeUpdatePopup = function () {
    $.fancybox.close({
      src: '#create-popup',
      type: 'inline',
      toolbar: false
    });
  }

  let btnUpdatePopup = document.getElementById('update-location')
  let btnCloseUpdatePopup = document.getElementById('close__update-popup')

  btnUpdatePopup.addEventListener("click", function(){
    openUpdatePopup()
  })

  btnCloseUpdatePopup.addEventListener("click", function(){
    closeUpdatePopup()
  })

  // placeholder тега select
  $('.create-popup__select').change(function(){
    let selectValue = this.value;

    if(!!selectValue) {
      $(this).next()
        .css('transform','translateY(-2.2rem) translateX(-1.5625rem)')
        .css('font-family', 'Futura PT')
        .css('color', 'rgb(23, 33, 57)')
        .css('line-height', '1.13rem');

      $('.select-container').css('margin-top', '1.1rem')
    }

  })
})

// navigation locations
let btnsLocationNav = document.querySelectorAll('.locations__nav-link')

btnsLocationNav.forEach(button => {
  button.addEventListener("click", function(event){
    event.stopPropagation();

    for (let btn of btnsLocationNav) {
      btn.classList.remove('nav-active')
    }
    button.classList.add('nav-active')

  });
});

// navigation settings
let btnsSettingNav = document.querySelectorAll('.settings__nav-link')

btnsSettingNav.forEach(button => {
  button.addEventListener("click", function(event){
    event.stopPropagation();

    for (let btn of btnsSettingNav) {
      btn.classList.remove('nav-active')
    }
    button.classList.add('nav-active')
  });
});

// list locations
let btnsLocationsList  = document.querySelectorAll('.locations__item-open')

btnsLocationsList.forEach(button => {
  button.addEventListener("click", function(event){
    event.stopPropagation();

    let childrenList = button.closest('.locations__item').querySelector('.locations__list')
    let btnOpen = button.closest('.locations__item').children[0].children[0]
    try {
      if(!childrenList) {
         throw new Error('Вложение отсутствует')
      }
      if(childrenList.style.display == 'none') {
        childrenList.style.display = 'flex'
        btnOpen.classList.add('locations__item-close')
        btnOpen.classList.remove('locations__item-open')
      } else {
        childrenList.style.display = 'none'
        btnOpen.classList.add('locations__item-open')
        btnOpen.classList.remove('locations__item-close')
      }
    } catch (error) {
      alert(error.message)
    }
  });
});
