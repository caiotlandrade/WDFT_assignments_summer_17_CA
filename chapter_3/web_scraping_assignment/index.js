var request = require("request"),
    cheerio = require("cheerio"),
    url = "https://www.reddit.com/";

var howManyPages = 3; // Just choose how many pages you want to scrape.

var page = 1;

function getTitles(url) {
    request(url, function (error, response, body) {
        
        if (!error) {
            console.log("*** Page: " + page + " ***");
            var $ = cheerio.load(body);
            titles = $(".title.may-blank");
            titles.each(function(index, title) {
                console.log((index + 1) + ": " + $(this).text());
            });
                
        } else {
            console.log("We had a problem trying to reach Reddit. Error: " + error);
        }

        page++;
        let nextUrl = $('.next-button a').attr('href');
        if (page <= howManyPages) {
            getTitles(nextUrl);
        }
    });
}

getTitles(url);