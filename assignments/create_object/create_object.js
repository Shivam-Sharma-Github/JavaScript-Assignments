function CreateObject(arr) {
    // Write your code here
    let objarr={}
    for (let i=0; i<arr.length; i+=2){
        objarr[arr[i]]=arr[i+1]
    }
    return objarr
}

module.exports = CreateObject;
