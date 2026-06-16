const video = document.getElementById("intro-video");

const intro = document.getElementById("intro");

const main = document.getElementById("main-content");

/* Click anywhere to start intro WITH sound */

document.addEventListener("click", function () {

    video.play();

}, { once: true });

/* After intro ends */

video.addEventListener("ended", function () {

    intro.style.display = "none";

    main.style.display = "block";

});

function openFullscreen(video){

    /* SHOW CONTROLS */

    video.setAttribute("controls", true);

    /* PORTRAIT VIDEO */

    if(video.classList.contains("portrait-video")){

        video.style.width = "auto";

        video.style.height = "100vh";

        video.style.objectFit = "contain";
    }

    /* LANDSCAPE VIDEO */

    else{

        video.style.width = "100vw";

        video.style.height = "100vh";

        video.style.objectFit = "contain";
    }

    /* PLAY */

    video.play();

    /* FULLSCREEN */

    if(video.requestFullscreen){

        video.requestFullscreen();
    }

    else if(video.webkitRequestFullscreen){

        video.webkitRequestFullscreen();
    }

    else if(video.msRequestFullscreen){

        video.msRequestFullscreen();
    }

    /* EXIT FULLSCREEN */

    document.addEventListener("fullscreenchange", () => {

        if(!document.fullscreenElement){

            video.removeAttribute("controls");

            /* RESTORE PORTRAIT CARD */

            if(video.classList.contains("portrait-video")){

                video.style.width = "220px";

                video.style.height = "390px";
            }

            /* RESTORE LANDSCAPE CARD */

            else{

                video.style.width = "300px";

                video.style.height = "170px";
            }
        }
    });
}