const info = {
    'paragraph':{
        'Name': 'Paragraph',
        'Tag': '<p>Your paragraph text here.</p>',
        'Description': 'This element allows you to add text to your webpage. Large chunks of information usually go in a paragraph.',
        'More': 'https://www.w3schools.com/html/html_paragraphs.asp',
        'Video': '<iframe width="560" height="315" src="https://www.youtube.com/embed/smaZvGlhJlQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    'header':{
        'Name': 'Header',
        'Tag': '<h1>Your paragraph text here.</h1>',
        'Description': 'This element adds a header to your website. If you have multiple sections, use this element to separate each section with a title.',
        'More': 'https://www.w3schools.com/tags/tag_header.asp',
        'Video': '<iframe width="560" height="315" src="https://www.youtube.com/embed/s1jmDbZyEms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    'image':{
        'Name': 'Image',
        'Tag': '<i src=""/>',
        'Description': 'This element adds an image to your website. All you need to add this element is the url of the image that you would like to add.',
        'More': 'https://www.w3schools.com/tags/tag_img.asp',
        'Video': '<iframe width="560" height="315" src="https://www.youtube.com/embed/R72N-B-cpfo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    'line break':{
        'Name': 'Line Break',
        'Tag': '<br/>',
        'Description': 'This element adds a spacer to your website. Add multiple of these tags to add more space between two elements.',
        'More': 'https://www.w3schools.com/tags/tag_br.asp',
        'Video': '<iframe width="560" height="315" src="https://www.youtube.com/embed/xEvvtWXcExY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
}
let all = ['paragraph', 'header', 'image', 'line break'];

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
    var keyword = document.getElementById('learn-search').value.toLowerCase();
    if (all.includes(keyword) == false){
        if (document.getElementById("list-options") != null){
            var obj = info[document.getElementById("list-options").firstChild.innerText];
            document.getElementById('learn-search').value = document.getElementById("list-options").firstChild.innerText ;
            document.getElementById('result-header').innerText = obj.Name;
            document.getElementById('result-tag').innerText = obj.Tag;
            document.getElementById('result-description').innerText = obj.Description;
            document.getElementById('result-more').innerHTML = 'To learn more, see the W3Schools documentation <a href = ' + obj.More + ' class="link">here</a>.'
            document.getElementById('result-video').innerHTML = obj.Video;
        }
        else{
            document.getElementById("result-header").innerText = "No results for '" + keyword + "'"
            document.getElementById("result-description").innerText = "Common searches include 'paragraph' and 'header'"
            document.getElementById('result-tag').innerText = "";
            document.getElementById('result-more').innerText = "";
            document.getElementById('result-video').innerHTML = "";
        }
    }
    else {
        var obj = info[keyword];
        document.getElementById('result-header').innerText = obj.Name;
        document.getElementById('result-tag').innerText = obj.Tag;
        document.getElementById('result-description').innerText = obj.Description;
        document.getElementById('result-more').innerHTML = 'To learn more, see the W3Schools documentation <a href = ' + obj.More + ' class="link">here</a>.'
        document.getElementById('result-video').innerHTML = obj.Video;
    }
    document.getElementById("list-options").remove();
}