process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function solve(grades){
    // Complete this function
    var temparr = [];
    for(var i = 0; i < grades.length; i++) {
      if(grades[i]%5 === 0 || grades[i] < 38 || 5-(grades[i]%5) > 2) {
        temparr.push(grades[i]);
      } else if(5-(grades[i]%5) === 1) {
        temparr.push(grades[i]+1);
      } else if(5-(grades[i]%5) === 2) {
        temparr.push(grades[i]+2);
      };
    }
    return temparr;
}

function main() {
    var n = parseInt(readLine());
    var grades = [];
    for(var grades_i = 0; grades_i < n; grades_i++){
       grades[grades_i] = parseInt(readLine());
    }
    var result = solve(grades);
    console.log(result.join("\n"));
}