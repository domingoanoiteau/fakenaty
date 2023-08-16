let res = 0
function soma(ar) {
    for (i = 0; i < ar.length; i++) {
        res += ar[i]
    }
    return res
}

console.log(soma([1, 2, 3]))
