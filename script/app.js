window.addEventListener('load', () => {
    registerSW();
});

async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./sw.js');
        } catch (e) {
            console.log('SW registration failed', e)
        }
    }
}


function iOS() {
    let isiOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    return isiOS;
}

function isSafari() {
    let isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
    navigator.userAgent &&
    navigator.userAgent.indexOf('CriOS') == -1 &&
    navigator.userAgent.indexOf('FxiOS') == -1;

    return isSafari;
}


window.addEventListener('DOMContentLoaded', () => {
    let displayMode = 'browser';
    if (window.matchMedia('(display-mode: standalone)').matches) {
      displayMode = 'standalone';
    }
    if (iOS() == true && displayMode == 'browser') {
        if (isSafari() == true) {
            const installPrompt = document.querySelector(".a2hs-install--iOS");
            installPrompt.style.display = "block";
        }
    }
});

function closeInstallPrompt() {
    const installPrompt = document.querySelector(".a2hs-install--iOS");
    installPrompt.style.display = "none";
}
