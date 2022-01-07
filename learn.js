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
    keyword = document.getElementById('learn-search').value;
    const info = JSON.parse("info.JSON")
    alert(info.name)
}