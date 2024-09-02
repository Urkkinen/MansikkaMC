function copyIP() {
    const ipElement = document.getElementById('ip');
    const ipText = ipElement.textContent.split(": ")[1];

    navigator.clipboard.writeText(ipText).then(() => {
        alert('IP-osoite kopioitu leikepöydälle!');
    }, (err) => {
        console.error('Kopion onnistuessa tapahtui virhe:', err);
    });
}
