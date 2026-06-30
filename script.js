let click = document.querySelector(".click");
let slide = document.querySelector(".slide");

let images = [
    "https://static.toiimg.com/thumb/msid-96203700,width-748,height-499,resizemode=4,imgsize-239734/.jpg",
    "https://images.trvl-media.com/place/1079/7c70ab1d-5b73-4916-a4a6-3cfdd2e876b7.jpg",
    "https://media.vogue.co.uk/photos/6842b8dd1218ff86ff31f76a/2:3/w_2560%2Cc_limit/Nautilus.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGSulv1DCewebrL7f6-CUiSM0_HD_STHIW72g0s1zlMWKPOqLr8yszK_1U&s=10"
];

click.addEventListener("click", () => {
    let i = 0;

    let interval = setInterval(() => {
        slide.src = images[i];
        i++;

        if (i === images.length) {
            clearInterval(interval);
        }
    }, 1000);
});
