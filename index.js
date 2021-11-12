// Function replaces sprite name, source path, and location

function newImage(name, url, left, bottom) {
    name = document.createElement('img')
    name.src = url
    name.style.position = 'fixed'
    name.style.left = left
    name.style.bottom = bottom
    document.body.append(name)
}

function newItem(name,url,left,bottom) {
    name = document.createElement('img')
    name.src = url
    name.style.position = 'fixed'
    name.style.left = left
    name.style.bottom = bottom
    document.body.append(name)

    name.addEventListener('dblclick', function(){
        name.remove()
    })
}

//Unfinished Bonus
/*function backGround(name, times, url) {
    for (var i = 0; i < times; i++) {
    document.body.append(name)
    
}
} 

let grass
backGround(grass, 15,'assets/grass.png',)
*/

// New Images
// let allows variable to be accessed from anywhere inside or outside the function

let greenCharacter
newImage(greenCharacter,'assets/green-character.gif','100px','100px')

let pineTree
newImage(pineTree,'assets/pine-tree.png','450px','200px')

let tree
newImage(tree,'assets/tree.png','200px','300px')

let pillar
newImage(tree,'assets/pillar.png','350px','100px')

let crate
newImage(crate,'assets/crate.png','150px','200px')

let well
newImage(well,'assets/well.png','500px','425px')

// New Items

let sword
newItem(sword,'assets/sword.png','500px','405px')

let shield
newItem(shield,'assets/shield.png','165px','185px')

let staff
newItem(staff, 'assets/staff.png','600px','100px')

//bg