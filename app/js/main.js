const supportedLanguages = ['en', 'de', 'es', 'fr', 'ja', 'pt', 'ru'];

function getLanguageFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('lang');
}

function getSystemLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    return lang.split('-')[0];
}

function loadLanguage(lang) {
    fetch(`lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('title').innerText = data["Get Unlimited <br>Access"];
            document.getElementById('advantage-title-1').innerText = data["Unlimited Art <br>Creation"];
            document.getElementById('advantage-title-2').innerText = data["Exclusive <br>Styles"];
            document.getElementById('advantage-title-3').innerText = data["Magic Avatars <br>With 20% Off"];
        })
        .catch(() => loadLanguage('en'));
}

function init() {
    const langFromURL = getLanguageFromURL();
    const systemLang = getSystemLanguage();
    const lang = supportedLanguages.includes(langFromURL) ? langFromURL : (supportedLanguages.includes(systemLang) ? systemLang : 'en');
    loadLanguage(lang);
}

window.onload = init;