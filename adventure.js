let i = 0;
do {
var enterCave = confirm("You end up in front of a cave, do you want to enter it?")

if(enterCave == true) {
    alert("You go into the cave. You cant see too much though.");
}
else {
    alert("You stay outside of the cave.")
}
i++;
} while (i<3);
