/* Created by Tivotal */

/* https://jsonplaceholder.typicode.com/posts */

const wrapper = document.querySelector(".wrapper");
const toast = document.querySelector(".toast");
const title = document.querySelector("span");
const subTitle = document.querySelector("p");
const icon = document.querySelector(".icon");
const closeIcon = document.querySelector(".close-icon");

//on page load
window.onload = () => {
  function ajax() {
    //creating new XML request
    let xhr = new XMLHttpRequest();
    //sending get method to given url
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    //when ajax load
    xhr.onload = () => {
      //if ajax status is 200 and less than 300
      //which means we are getting data from the given url
      //which we consider it as device has internet connection
      if (xhr.status == 200 && xhr.status < 300) {
        //device online
        toast.classList.remove("offline");
        title.innerText = "Online";
        subTitle.innerText = "Hey, Internet is connected";
        icon.innerHTML = `<i class="bx bx-wifi"></i>`;
        closeIcon.onclick = () => {
          wrapper.classList.add("hide");
        };
      } else {
        //device is offline
        offline();
      }
    };

    xhr.onerror = () => {
      offline();
    };

    //sending get request to given url
    xhr.send();
  }

  function offline() {
    wrapper.classList.remove("hide");
    toast.classList.add("offline");
    title.innerText = "Offline";
    subTitle.innerText = "Opps, Internet is disconnected";
    icon.innerHTML = `<i class="bx bx-wifi-off"></i>`;
  }

  //triggers in every 100ms
  setInterval(() => {
    ajax();
  }, 100);
};
