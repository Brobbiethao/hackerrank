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

function timeConversion(s) {
    // Complete this function
    s = s.split("");
    var hh = s[0]+""+s[1]
    var mm = s[3]+""+s[4]
    var ss = s[6]+""+s[7]
    var ampm = s[8]+s[9]
    var twentyfourHours = 0;
      if(ampm === "PM") {
        parseInt(hh) === 12 ?
        twentyfourHours = 12 :
        twentyfourHours = parseInt(hh)+12;
      } 
      else if(ampm === "AM") {
        parseInt(hh) === 12 ?
        parseInt(hh) < 1 ?
        twentyfourHours = "0" :
        twentyfourHours = "00" :
        twentyfourh = hh;
      }
    return twentyfourHours+":"+mm+":"+ss;
}

function main() {
    var s = readLine();
    var result = timeConversion(s);
    process.stdout.write("" + result + "\n");

}