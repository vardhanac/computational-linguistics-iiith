function selectLanguage(){
    var x = document.getElementById("select-lang").value;


        if(x==='eng'|| x==='hindi')
        {
            document.getElementById("sentence-intro").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
            document.getElementById("button-select-intro").innerHTML="(select the buttons in proper order)";
            document.getElementById("sentence-intro").style.color="blue";
            document.getElementById("sentence-intro").style.fontSize="100%";
            document.getElementById("button-select-intro").style.color="lightblue";

        }
        else
        {
            alert("Please Select A Language.")
        }
    }