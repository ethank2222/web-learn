const info = {
    'paragraph':{
        'Name': 'Paragraph',
        'Tag': '<p></p>',
        'Description': 'This element allows you to add text to your webpage. Large chunks of information usually go in a paragraph.',
        'More': 'https://www.w3schools.com/html/html_paragraphs.asp',
        'Video': '<iframe width="560" height="315" src="https://www.youtube.com/embed/smaZvGlhJlQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
}

setInterval(function(){
    var current = document.getElementById("learn-search").placeholder;
    if (current == "Search."){
        document.getElementById("learn-search").placeholder = "Search..";
    }
    else if (current == "Search.."){
        document.getElementById("learn-search").placeholder = "Search...";
    }
    else{
        document.getElementById("learn-search").placeholder = "Search.";
    }
}, 400);

document.getElementById('learn-search').onkeydown = function(e){
    if(e.keyCode == 13){
        search();
    }
};

document.getElementById("search-button").addEventListener("click", event => {
    search();
});

function search() {
    var keyword = document.getElementById('learn-search').value.toLowerCase();
    var all = ['paragraph'];
    if (all.includes(keyword) == false){
        document.getElementById("result-header").innerText = "No results for '" + keyword + "'"
        document.getElementById("result-description").innerText = "Common searches include 'paragraph' and 'header'"
        document.getElementById('result-tag').innerText = "";
        document.getElementById('result-more').innerText = "";
        document.getElementById('result-video').innerHTML = "";
    }
    else {
        switch (keyword){
            case ('paragraph'): {
                obj = info.paragraph;
            }
            case ('header'): {
                obj = info.paragraph;
            }
        }
        document.getElementById('result-header').innerText = obj.Name;
        document.getElementById('result-tag').innerText = obj.Tag;
        document.getElementById('result-description').innerText = obj.Description;
        document.getElementById('result-more').innerHTML = 'To learn more, see the W3Schools documentation <a href = ' + obj.More + ' class="link">here</a>.'
        document.getElementById('result-video').innerHTML = obj.Video;
    }
}