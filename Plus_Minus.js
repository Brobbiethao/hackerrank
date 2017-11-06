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

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    let positive=0;
    let negative=0;
    let zero=0;
    let len = arr.length;
    for(var i = 0; i < arr.length; i++) {
        arr[i] < 0 ? negative++ : arr[i] > 0 ? positive++ : zero++;
    }
    console.log(positive/len+'\n'+negative/len+'\n'+zero/len)
}