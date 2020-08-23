const pictures = document.getElementsByClassName('pictureMini');
const activeImg = document.getElementById('bigPicture');

let pictureSlider = setInterval(initSlider, 3000);

function initSlider() {
    let firstTime = true;
    for (let i = 0; i < pictures.length; i++) {
        if (firstTime && pictures[i].className.includes('active')) {
            const index = (pictures.length - 1) === i ? 0 : (i + 1);
            loadPicture(i, index);
            firstTime = false;
        }
    }
}

function backOrNextBtn(value) {
    let firstTime = true;
    for (let i = 0; i < pictures.length; i++) {
        if (firstTime && pictures[i].className.includes('active')) {
            let index;
            switch (value) {
                case "next":
                    index = (pictures.length - 1) === i ? 0 : (i + 1);
                    break;
                case "back":
                    index = i === 0 ? (pictures.length - 1) : (i - 1);
                    break;
            }
            loadPicture(i, index);
            restartInterval();
            firstTime = false;
        }
    }
}
function loadPicture(i, index) {
    pictures[i].classList.remove("active");
    pictures[index].classList.add('active');
    activeImg.setAttribute('src', pictures[index].getAttribute('src'));
}

function restartInterval() {
    clearInterval(pictureSlider);
    pictureSlider = setInterval(initSlider, 3000);
}

