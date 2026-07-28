const colorsBox = document.getElementById('colorsBox');
var BodyColor = document.documentElement.style;
export function colorHandler (){
    for (let child of colorsBox.children) {
    child.addEventListener('click', target => {
        let extractedColor = target.srcElement.className;//this code is for extract classname of circles
        let finalColor = "--" + extractedColor.replace('bg','color') //this code for build of --color-example-400
        let color = getComputedStyle(document.documentElement).getPropertyValue(`${finalColor}`)
        BodyColor.setProperty('--color-Body', color)
    })

};
}