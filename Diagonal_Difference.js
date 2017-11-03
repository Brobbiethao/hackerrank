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
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    var nxnRight = 0;
    var nxnLeft = 0;
    let len;
    for(var i = 0; i < a.length; i++) {
        nxnRight += a[i][i];
        let len = (a[i].length-i)-1
        nxnLeft += a[i][len];
    }
    console.log(0 > nxnRight - nxnLeft ? -1*(nxnRight - nxnLeft) : nxnRight - nxnLeft)
}
