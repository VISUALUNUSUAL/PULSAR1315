import { LoadingManager } from "../../libs/three.module.js";

function onTransitionEnd(event) { event.target.remove(); }

function loading() {

const loadingManager = new LoadingManager(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('fade-out');
        loadingScreen.addEventListener('transitionend', onTransitionEnd);
    });

    return loadingManager;
}

export { loading };
