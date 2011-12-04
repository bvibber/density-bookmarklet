(function() {

var thumbimage = /\bthumbimage\b/,
    svgMatch = /^(.*)\/thumb(\/[0-9a-f]\/[0-9a-f]{2}\/)([^\/]+\.svg)\/\d+px-(\3\.png)$/i;
    pngMatch = /^(.*\/thumb\/[0-9a-f]\/[0-9a-f]{2}\/)([^\/]+\.png)\/\d+px-(\2)$/i;
    images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
    var img = images[i];
    if (img.className.match(thumbimage)) {
        var url = img.src,
            matches = url.match(pngMatch);
        if (matches) {
            var width = parseInt(img.width) * 2,
                pngUrl = matches[1] + matches[2] + '/' + width + 'px-' + matches[3];
            img.src = pngUrl;
            continue;
        }

        matches = url.match(svgMatch);
        if (matches) {
            var svgUrl = matches[1] + matches[2] + matches[3];
            img.src = svgUrl;
            continue;
        }
    }
}

})();