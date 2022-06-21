let username = prompt('Lütfen adınızı girin: ')
let textusername = document.querySelector('#myName')
textusername.innerHTML = `${username}`




let clock = document.querySelector('#myClock')

function showTime() {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let months = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık",];
    m = w_momentTime(m);
    s = w_momentTime(s);


    clock.innerHTML =`${h}:${m}:${s} ${days[now.getDay()]} ${now.getDay()}  ${months[now.getMonth()]} ${now.getFullYear()}` 
    
    
  }
  
  function w_momentTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
  }
  showTime()
  setInterval("showTime()", 1000);

 