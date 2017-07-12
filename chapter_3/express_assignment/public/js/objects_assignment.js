$(document).foundation()

function Journal(topic) {
    myEntries = [];
    return this;
}

$("#button-journal").click(function () {
    var journalTopic = $("#journal-topic").val();
    newJournal = new Journal(journalTopic);

    $("#h2").html(`This is your journal about ${journalTopic}`);
    $("#hide").removeClass("hidden");
    $("#hide2").removeClass("hidden");
    $("#display").addClass("hidden");
});

function Entry (title, author, content) {

    this.title = title;
    this.author = author;
    this.content = content;

    myEntries.push(this);
        $("#new-entries").prepend(
            `<li><h3>${this.title}</h3>
            <p><em>by ${this.author}</em></p>
            <p>${this.content}</p>`);

    return this;
}

$("#button-entry").click(function () {
    var entryTitle = $("#title").val();
    var entryAuthor = $("#author").val();
    var entryContent = $("#content").val();
    
    newEntry = new Entry(entryTitle, entryAuthor, entryContent);
    
    $("input").val("");
    $("textarea").val("");
});
