
// Function replaces sprite name, source path, and location

function newImage(name, url, left, bottom) {
    name = document.createElement('img')
    name.src = url
    name.style.position = 'fixed'
    name.style.left = left
    name.style.bottom = bottom
    document.body.append(name)
    return name;
}

function newItem(name,url,left,bottom) {
   name = newImage(name, url, left, bottom);

    name.addEventListener('dblclick', function(){
        name.remove()
    })
}

/*
//Unfinished Bonus
function backGround(name, url, height, width,) {
    for (var w = 0; w < width; w++) {
        for (var h = 0; h < height; h++) {
        } 
*/

// New Images
newImage('greenCharacter','assets/green-character.gif','100px','100px')
newImage('pineTree','assets/pine-tree.png','450px','200px')
newImage('tree','assets/tree.png','200px','300px')
newImage('pillar','assets/pillar.png','350px','100px')
newImage('crate','assets/crate.png','150px','200px')
newImage('well','assets/well.png','500px','425px')

// New Items
newItem('sword','assets/sword.png','500px','405px')
newItem('shield','assets/shield.png','165px','185px')
newItem('staff', 'assets/staff.png','600px','100px')
