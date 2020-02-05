function createSoccerViz(){


    d3.select("svg")
    .append("g")
    .attr("id", "teamsG")
    .attr("transform", "translate(50,300)")

    // d3.csv("worldcup.csv", data => {

    //     overallTeamViz(data)
    //     console.log("got data ", data);
    // })

   /*  d3.csv("worldcup.csv", function(data) {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].Name);
            console.log(data[i].Age);
        }
    });

    d3.csv("worldcup.csv")
      .get(function(data) {
        console.log(data);
      }); */

      d3.request("worldcup.csv")
        .mimeType("text/csv")
        .response(function (xhr) { 
            return d3.csvParse(xhr.responseText); })
        .get(function(data) {
            console.log(data);
        });
}
var i = 0;

function overallTeamViz(incomingData){

 
    d3.selectAll("g")   
    .append("g")
    .attr("class", "overallG")
    .attr("transform", "translate("+ (i * 50) +"), 0")

    i++;

    var teamG = d3.selectAll("g.overallG");
    teamG.append("circle")
         .attr("r", 20)
    
    teamG.append("text")
         .attr("y", 30)
         .text( incomingData.team)

}