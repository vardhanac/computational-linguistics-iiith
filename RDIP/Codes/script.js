var reformButtons;
function selectLanguage(){

    var language = document.getElementById("select-lang").value;

        if(language==='eng')
        {
            var english1 = ['John ate an apple before afternoon',
                            'before afternoon John ate an apple',
                            'John before afternoon ate an apple'
                            ];
            var english2 = ['some students like to study in the night',
                            'at night some students like to study'
                           ];
            var english3 = ['John and Mary went to church',
                            'Mary and John went to church'];
            var english4 = ['John went to church after eating',
                            'after eating John went to church',
                            'John after eating went to church'];
            var english5 = ['did he go to market',
                            'he did go to market'];
            var english6 = ['the womean who called my sister sells cosmetics',
                            'the woman who sells cosmetics called my sister',
                            'my sister who sells cosmetics called the woman',
                            'my sister who called the woman sells cosmetics'];
            var english7 = ['John goes to the library and studies',
                            'John studies and goes to the library'];
            var english8 = ['John ate an apple so did she',
                            'she ate an apple so did John'];
            var english9 = ['the‌ ‌teacher‌ ‌returned‌ ‌the‌ ‌book‌ ‌after‌ ‌she‌ ‌noticed‌ ‌the‌ ‌error‌',
                            'the‌ ‌teacher‌ ‌noticed‌ ‌the‌ ‌error‌ ‌after‌ ‌she‌ ‌returned‌ ‌the‌ ‌book‌',
                            'after‌ ‌the‌ ‌teacher‌ ‌returned‌ ‌the‌ ‌book‌ ‌she‌ ‌noticed‌ ‌the‌ ‌error‌',
                            'after‌ ‌the‌ ‌teacher‌ ‌noticed‌ ‌the‌ ‌error‌ ‌she‌ ‌returned‌ ‌the‌ ‌book‌',
                            'she‌ ‌returned‌ ‌the‌ ‌book‌ ‌after‌ ‌the‌ ‌teacher‌ ‌noticed‌ ‌the‌ ‌error‌',
                            'she‌ ‌noticed‌ ‌the‌ ‌error‌ ‌after‌ ‌the‌ ‌teacher‌ ‌returned‌ ‌the‌ ‌book‌',
                            'after‌ ‌she‌ ‌returned‌ ‌the‌ ‌book‌ ‌the‌ ‌teacher‌ ‌noticed‌ ‌the‌ ‌error‌',
                            'after‌ ‌she‌ ‌noticed‌ ‌the‌ ‌error‌ ‌the‌ ‌teacher‌ ‌returned‌ ‌the‌ ‌book‌'];
            var english10 = ['I‌ ‌told‌ ‌her‌ ‌that‌ ‌I‌ ‌bought‌ ‌a‌ ‌book‌ ‌yesterday‌',
                             'I‌ ‌told‌ ‌her‌ ‌yesterday‌ ‌that‌ ‌I‌ ‌bought‌ ‌a‌ ‌book‌',
                             'yesterday‌ ‌I‌ ‌told‌ ‌her‌ ‌that‌ ‌I‌ ‌bought‌ ‌a‌ ‌book‌',
                             'I‌ ‌bought‌ ‌a‌ ‌book‌ ‌that‌ ‌I‌ ‌told‌ ‌her‌ ‌yesterday‌',
                             'I‌ ‌bought‌ ‌a‌ ‌book‌ ‌yesterday‌ ‌that‌ ‌I‌ ‌told‌ ‌her‌',
                             'yesterday‌ ‌I‌ ‌bought‌ ‌a‌ ‌book‌ ‌that‌ ‌I‌ ‌told‌ ‌her‌'];
        
        var allEnglish = [english1,english2,english3,english4,english5,english6,english7,english8,english9,english10];

            document.getElementById("sentence-intro").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";

            document.getElementById("button-select-intro").innerHTML="(select the buttons in proper order)";
            document.getElementById("sentence-intro").style.color="blue";
            document.getElementById("sentence-intro").style.fontSize="100%";
            document.getElementById("button-select-intro").style.color="blue";


            var randomEnglish = allEnglish[Math.floor(Math.random() * allEnglish.length)];


            var randomEnglishSentence = randomEnglish[Math.floor(Math.random() * randomEnglish.length)];

            var words=randomEnglishSentence.split(" ");
            var i=0,l=0;
            l = words.length
            document.getElementById("jumbled-words").innerHTML=" "
            for(i=0;i<l;i++)
            {
                document.getElementById("jumbled-words").innerHTML += "<button class='btn' id='btn"+i+"' value='"+words[i]+"' onclick='Bfunction(this.id,this.value);'>"+words[i]+"</button>";
                console.log("<button class='btn' id='btn"+i+"' value='"+words[i]+"' onclick='Bfunction(this.id,this.value);'>"+words[i]+"</button>");

                document.getElementById("msgFormedSentence").innerHTML="";
                document.getElementById("selectedWord").innerHTML ="";
                document.getElementById("reformButton").innerHTML = "";
            }    
            reformButtons=document.getElementById("jumbled-words").innerHTML ;
        }
        else if(language==='hindi')
        {        
            var hindi1 = ['राम‌ ‌और‌ ‌श्याम‌ ‌बाजार‌ ‌गयें‌',
                        'राम‌ ‌और‌ ‌श्याम‌ ‌गयें‌ ‌बाजार‌',
                        'बाजार‌ ‌गयें‌ ‌राम‌ ‌और‌ ‌श्याम‌',
                        'गयें‌ ‌बाजार‌ ‌राम‌ ‌और‌ ‌श्याम‌'];
            var hindi2 = ['राम‌ ‌सोया‌ ‌और‌ ‌श्याम‌ ‌भी‌',
                        'श्याम‌ ‌सोया‌ ‌और‌ ‌राम‌ ‌भी‌',
                        'सोया‌ ‌श्याम‌ ‌और‌ ‌राम‌ ‌भी‌',
                        'सोया‌ ‌राम‌ ‌और‌ ‌श्याम‌ ‌भी‌'];
            var hindi3 = ['मैंने‌ ‌उसे‌ ‌बताया‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                        'मैंने‌ ‌उसे‌ ‌बताया‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                        'उसे‌ ‌मैंने‌ ‌बताया‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                        'उसे‌ ‌मैंने‌ ‌बताया‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                        'मैंने‌ ‌बताया‌ ‌उसे‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                        'मैंने‌ ‌बताया‌ ‌उसे‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                        'उसे‌ ‌बताया‌ ‌मैंने‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                        'उसे‌ ‌बताया‌ ‌मैंने‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                        'बताया‌ ‌मैंने‌ ‌उसे‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                        'बताया‌ ‌मैंने‌ ‌उसे‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                        'बताया‌ ‌उसे‌ ‌मैंने‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                        'बताया‌ ‌उसे‌ ‌मैंने‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌'];
            var hindi4 = ['राम‌ ‌खाकर‌ ‌सोया‌',
                        'खाकर‌ ‌राम‌ ‌सोया‌',
                        'राम‌ ‌सोया‌ ‌खाकर‌',
                        'खाकर‌ ‌सोया‌ ‌राम‌',
                        'सोया‌ ‌राम‌ ‌खाकर‌',
                        'सोया‌ ‌खाकर‌ ‌राम‌'];
            var hindi5 = ['बिल्लियों‌ ‌को‌ ‌मारकर‌ ‌कुत्ता‌ ‌सो‌ ‌गया‌',
                        'मारकर‌ ‌बिल्लियों‌ ‌को‌ ‌कुत्ता‌ ‌सो‌ ‌गया',
                        'बिल्लियों‌ ‌को‌ ‌मारकर‌ ‌सो‌ ‌गया‌ ‌कुत्ता‌',
                        'मारकर‌ ‌बिल्लियों‌ ‌को‌ ‌सो‌ ‌गया‌ ‌कुत्ता‌',
                        'कुत्ता‌ ‌सो‌ ‌गया‌ ‌बिल्लियों‌ ‌को‌ ‌मारकर‌',
                        'कुत्ता‌ ‌सो‌ ‌गया‌ ‌मारकर‌ ‌बिल्लियों‌ ‌को‌',
                        'सो‌ ‌गया‌ ‌कुत्ता‌ ‌बिल्लियों‌ ‌को‌ ‌मारकर',
                        'सो‌ ‌गया‌ ‌कुत्ता‌ ‌मारकर‌ ‌बिल्लियों‌ ‌को‌'];
            var hindi6 = ['एक‌ ‌लाल‌ ‌किताब‌ ‌वहाँ‌ ‌है‌',
                        'एक‌ ‌लाल‌ ‌किताब‌ ‌है‌ ‌वहाँ‌',
                        'वहाँ‌ ‌है‌ ‌एक‌ ‌लाल‌ ‌किताब',
                        'है‌ ‌वहाँ‌ ‌एक‌ ‌लाल‌ ‌किताब'];
            var hindi7 = ['एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌ ‌वहाँ‌ ‌है‌',
                        'एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌ ‌है‌ ‌वहाँ‌',
                        'बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌ ‌वहाँ‌ ‌है‌',
                        '‌बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌ ‌है‌ ‌वहाँ',
                        'वहाँ‌ ‌है‌ ‌एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌',
                        'वहाँ‌ ‌है‌ ‌बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌',
                        '‌है‌ ‌वहाँ‌ ‌एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌',
                        'है‌ ‌वहाँ‌ ‌बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌'];

                    var allHindi = [hindi1,hindi2,hindi3,hindi4,hindi5,hindi6,hindi7];
                
                document.getElementById("sentence-intro").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
                document.getElementById("button-select-intro").innerHTML="(select the buttons in proper order)";
                document.getElementById("sentence-intro").style.color="rgb(41, 41, 196)";
                document.getElementById("sentence-intro").style.fontSize="100%";
                document.getElementById("sentence-intro").style.color="rgb(41, 41, 196)";
                var randomHindi = allHindi[Math.floor(Math.random() * allHindi.length)];

                var randomHindiSentence = randomHindi[Math.floor(Math.random() * randomHindi.length)];
                
                var words=randomHindiSentence.split(" ");
                var i=0,l=0;
                l = words.length
                document.getElementById("jumbled-words").innerHTML=" "
                for(i=0;i<l;i++)
                {
                    document.getElementById("jumbled-words").innerHTML += "<button class='btn' id='btn"+i+"' value='"+words[i]+"' onclick='Bfunction(this.id,this.value);'>"+words[i]+"</button>";
                    console.log(words[i]);
                    document.getElementById("msgFormedSentence").innerHTML="";
                    document.getElementById("selectedWord").innerHTML ="";
                    document.getElementById("reformButton").innerHTML = "";   
                }
                reformButtons=document.getElementById("jumbled-words").innerHTML;                 
        }
        else
        {
            alert("Please Select A Language.");
        }
        
    }

function Bfunction(bid,bvalue)
        {

            document.getElementById("msgFormedSentence").innerHTML="Formed Sentence <span>(after selecting words):</span>";
            document.getElementById("selectedWord").innerHTML +=" "+bvalue;
            document.getElementById(bid).style.display="none";
            document.getElementById("reformButton").innerHTML = "<button class='reform' id='reform' onclick='reform()'> Re-form the sentence</button>";


        }
    function reform()
    {

        document.getElementById("jumbled-words").innerHTML = reformButtons;
        document.getElementById("msgFormedSentence").innerHTML="";
        document.getElementById("selectedWord").innerHTML ="";
        document.getElementById("reformButton").innerHTML = "";


    }        
    