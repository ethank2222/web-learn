const info = {
    'paragraph':{
        'Name': 'Paragraph',
        'Tag': '<p>Your paragraph text here.</p>',
        'Description': 'This element allows you to add text to your webpage. Large chunks of information usually go in a paragraph.',
        'More': 'https://www.w3schools.com/html/html_paragraphs.asp',
        'Video': '<iframe width="560" height="315" src="https://www.youtube.com/embed/smaZvGlhJlQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
}
let all = ['paragraph', 'header'];

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
    setTimeout(function(){
        var value = document.getElementById('learn-search').value.toLowerCase();
        if(e.keyCode == 13){
            search();
        }
        else{
            if (value == ""){
                document.getElementById("list-options").remove();
            }
            else if (document.getElementById("list-options") == null){
                var list = document.createElement('div');
                list.id = "list-options";
                list.style.left = "50%";
                list.style.transform = "translateX(-50%)"
                list.style.width = "300px";
                list.style.position = "absolute";
                list.style.backgroundColor = "rgba(230,230,230,1)";
                list.style.zIndex = "10000";
                document.getElementsByClassName('inline')[0].appendChild(list);
            }
            else{
                for (var i = 0; i < document.getElementById("list-options").childElementCount; i++){
                    if (document.getElementById("list-options").childNodes[i].innerText.indexOf(value) == -1){
                        document.getElementById("list-options").childNodes[i].remove();
                    }
                }
            }
            var total = 0;
            for (var i = 0; i < all.length; i++){
                if (all[i].indexOf(value) != -1 && total <= 5){
                    var option = document.createElement('p');
                    option.innerText = all[i];
                    option.style.textAlign = "left";
                    option.style.padding = "10px";
                    option.style.margin = "0px"
                    option.style.fontSize = "18px";
                    option.style.cursor = "pointer";
                    list.appendChild(option);
                    total ++;
                    option.addEventListener('click', function(){
                        document.getElementById('learn-search').value = this.innerText;
                        search();
                    });
                }
            }
        }
    }, 50)
};

document.getElementById("search-button").addEventListener("click", event => {
    search();
});

function search() {
    document.getElementById("list-options").remove();
    var keyword = document.getElementById('learn-search').value.toLowerCase();
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