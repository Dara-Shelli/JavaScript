

		//create a new instance of XMLHttpRequest
     let ajax = new XMLHttpRequest();
    // the action the we will do when the request is finshed
    ajax.onload = function(){
      let jsonText = ajax.responseText;
      let textParsed =  JSON.parse(jsonText);
      let randomScore;
      for (var i = 0; i < textParsed.length; i++) {
        randomScore = Math.random()*1000;
        textParsed[i]["score"] = randomScore;
      }

      // ex-3

        let copy;

        for ( let a = 0; a <=99; a++) {

          for (let j = 0; j < textParsed.length - 1; j++) {

            if (textParsed[j]["score"] >textParsed[j+1]["score"]){

              copy = textParsed[j+1];

              textParsed[j+1] = textParsed[j];
              textParsed[j] = copy;
                          }
           
          }
        }
        // ex-4

        let catA =[];
        let catB =[];
        let catC =[];

        textParsed.forEach(function(entry){

          if (entry["score"] > 750) {
            catA.push(entry);

          } else if(entry["score"] > 500){
            catB.push(entry);

          }else {
            catC.push(entry);

          }
        });

        //ex-5


        let count = function(value){

          return value.country === "Bahrain";
        }

        let Bahrain = textParsed.filter(count);


        // ex-6

        let highestScore = textParsed[(textParsed.length-1)]["score"];
        let lowestScore = textParsed[0]["score"];


        console.log(textParsed);
        console.log(catA);
        console.log(catB);
        console.log(catC);
        console.log(Bahrain);
        console.log(lowestScore);
        console.log(highestScore);
    }
    // the type, the url, asynchronous ?
    ajax.open("GET", "data.json", true);
    // sed the request
    ajax.send(null);



