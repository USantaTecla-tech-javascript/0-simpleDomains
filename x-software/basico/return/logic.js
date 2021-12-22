function getCreaterURL(protocol, domain){
    function createURL(path, name = ""){
        return `${protocol}://${domain}/${path}/${name}`;
    }
    return createURL;
}

console.log(getCreaterURL("http", "www.uSantaTecla")("javascript","tutorial.html"));
console.log(getCreaterURL("http", "www.uSantaTecla")("java","ejemplos.html"));
console.log(getCreaterURL("https", "www.codeurjc.es")("mastercloudapps"));
