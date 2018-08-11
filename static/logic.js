function navButton(buttonId, contentId, order) {
    this.buttonId = buttonId;
    this.contentId = contentId;
    this.order = order;
};

var current = 0;

var projectsButton = new navButton("projectsButton", "projectsContent", 0);
var aboutMeButton = new navButton("aboutMeButton", "aboutMeContent", 1);
var staticResumeButton = new navButton("staticResumeButton", "staticResumeContent", 2);

buttonList = [projectsButton, aboutMeButton, staticResumeButton];

for (var loop = 0; loop < buttonList.length; loop ++) {
    (function(loop) {
        let loopObj = buttonList[loop];
        console.log(loopObj);
        document.getElementById(loopObj.buttonId).addEventListener("click", function(){
            if (loopObj.order == current) {
                return;
            } else {
            changeView(loopObj)};
        });
    })(loop);
};


function changeView(target) {
    console.log(target.order)
    console.log(target.buttonId)

    for (var x = 0; x < buttonList.length; x ++) {
        (function(x) {
            let loopObj = buttonList[x]

            if (loopObj.order == target.order) {
                if (loopObj.order == 1) {
                    document.getElementById(loopObj.contentId).style.transform = "translate3d(0, -92vh, 0)"
                } else if (loopObj.order == 2) {
                    document.getElementById(loopObj.contentId).style.transform = "translate3d(0, -184vh, 0)"
                } else {
                    document.getElementById(loopObj.contentId).style.transform = "translate3d(0, 0, 0)"};

            } else if (loopObj.order - target.order == 1) {
                if (loopObj.order == 1) {
                    document.getElementById(loopObj.contentId).style.transform = "translate3d(100vw, -92vh, 0)"
                } else {
                    document.getElementById(loopObj.contentId).style.transform = "translate3d(100vw, -184vh, 0)"
                }

            } else if (loopObj.order - target.order == -1) {
                if (loopObj.order == 1) {
                    document.getElementById(loopObj.contentId).style.transform = "translate3d(100vw, -92vh, 0)"
                } else {
                    document.getElementById(loopObj.contentId).style.transform = "translate3d(100vw, 0, 0)"
                }

            } else if (loopObj.order - target.order == 2) {
                document.getElementById(loopObj.contentId).style.transform = "translate3d(100vw, -184vh, 0)"

            } else if (loopObj.order - target.order == -2) {
                document.getElementById(loopObj.contentId).style.transform = "translate3d(100vw, 0, 0)"
            }

        })(x);
    
    };



    current = target.order;
}







































































// function navButton(buttonId, contentId, order, posZero, posOne, posTwo, posThree) {
//     this.buttonId = buttonId;
//     this.contentId = contentId;
//     this.order = order;
//     this.posZero = posZero;
//     this.posOne = posOne;
//     this.posTwo = posTwo;
//     this.posThree = posThree;
// };

// var current = 0;

// var projectsButton = new navButton("projectsButton", "projectsContent", 0, ["0vw","0vw"], ["0vw","100vw"], ["200vw","200vw"], ["300vw","300vw"]);
// var aboutMeButton = new navButton("aboutMeButton", "aboutMeContent", 1, ["0vw","100vw"], ["0vw","0vw"], ["100vw","100vw"], ["200vw","200vw"]);
// var interactiveResumeButton = new navButton("interactiveResumeButton", "interactiveResumeContent", 2, ["200vw","200vw"], ["100vw","100vw"], ["0vw","0vw"], ["100vw","100vw"]);
// var staticResumeButton = new navButton("staticResumeButton", "staticResumeContent", 3, ["300vw","300vw"], ["200vw","200vw"], ["100vw","100vw"], ["0vw","0vw"]);

// buttonList = [projectsButton, aboutMeButton, interactiveResumeButton, staticResumeButton];

// for (var loop = 0; loop < buttonList.length; loop ++) {
//     (function(loop) {
//         let loopObj = buttonList[loop];
//         console.log(loopObj);
//         document.getElementById(loopObj.buttonId).addEventListener("click", function(){
//             if (loopObj.order == current) {
//                 return;
//             } else {
//             changeView(loopObj)};
//         });
//     })(loop);
// };


// function changeView(target) {
//     console.log(target.order)
//     console.log(target.buttonId)


//     for (var loop = 0; loop < buttonList.length; loop ++) {
        
//         let loopObj = buttonList[loop];
//         console.log(loopObj);
//         switch (Math.abs(loopObj.order - current)) {
//             case 3:
//                 document.getElementById(loopObj.contentId).style.transition = "margin 6s"
//                 break;
//             case 2:
//                 document.getElementById(loopObj.contentId).style.transition = "margin 4s"
//                 break;
//             case 1:
//                 document.getElementById(loopObj.contentId).style.transition = "margin 2s"
//                 break;
//         };
//     };

//     if (target.order == 0) {
//         document.getElementById(aboutMeButton.contentId).style.marginLeft = aboutMeButton.posZero[0]
//         document.getElementById(aboutMeButton.contentId).style.marginLeft = aboutMeButton.posZero[1]

//         document.getElementById(projectsButton.contentId).style.marginLeft = projectsButton.posZero[0]
//         document.getElementById(projectsButton.contentId).style.marginLeft = projectsButton.posZero[1]

//         document.getElementById(interactiveResumeButton.contentId).style.marginLeft = interactiveResumeButton.posZero[0]
//         document.getElementById(interactiveResumeButton.contentId).style.marginLeft = interactiveResumeButton.posZero[1]

//         document.getElementById(staticResumeButton.contentId).style.marginLeft = staticResumeButton.posZero[0]
//         document.getElementById(staticResumeButton.contentId).style.marginLeft = staticResumeButton.posZero[1]

//     } else if (target.order == 1) {
//         document.getElementById(aboutMeButton.contentId).style.marginLeft = aboutMeButton.posOne[0]
//         document.getElementById(aboutMeButton.contentId).style.marginLeft = aboutMeButton.posOne[1]

//         document.getElementById(projectsButton.contentId).style.marginLeft = projectsButton.posOne[0]
//         document.getElementById(projectsButton.contentId).style.marginLeft = projectsButton.posOne[1]

//         document.getElementById(interactiveResumeButton.contentId).style.marginLeft = interactiveResumeButton.posOne[0]
//         document.getElementById(interactiveResumeButton.contentId).style.marginLeft = interactiveResumeButton.posOne[1]

//         document.getElementById(staticResumeButton.contentId).style.marginLeft = staticResumeButton.posOne[0]
//         document.getElementById(staticResumeButton.contentId).style.marginLeft = staticResumeButton.posOne[1]

//     } else if (target.order == 2) {
//         document.getElementById(aboutMeButton.contentId).style.marginLeft = aboutMeButton.posTwo[0]
//         document.getElementById(aboutMeButton.contentId).style.marginLeft = aboutMeButton.posTwo[1]

//         document.getElementById(projectsButton.contentId).style.marginLeft = projectsButton.posTwo[0]
//         document.getElementById(projectsButton.contentId).style.marginLeft = projectsButton.posTwo[1]

//         document.getElementById(interactiveResumeButton.contentId).style.marginLeft = interactiveResumeButton.posTwo[0]
//         document.getElementById(interactiveResumeButton.contentId).style.marginLeft = interactiveResumeButton.posTwo[1]

//         document.getElementById(staticResumeButton.contentId).style.marginLeft = staticResumeButton.posTwo[0]
//         document.getElementById(staticResumeButton.contentId).style.marginLeft = staticResumeButton.posTwo[1]

//     } else if (target.order == 3) {
//         document.getElementById(aboutMeButton.contentId).style.marginLeft = aboutMeButton.posThree[0]
//         document.getElementById(aboutMeButton.contentId).style.marginLeft = aboutMeButton.posThree[1]

//         document.getElementById(projectsButton.contentId).style.marginLeft = projectsButton.posThree[0]
//         document.getElementById(projectsButton.contentId).style.marginLeft = projectsButton.posThree[1]

//         document.getElementById(interactiveResumeButton.contentId).style.marginLeft = interactiveResumeButton.posThree[0]
//         document.getElementById(interactiveResumeButton.contentId).style.marginLeft = interactiveResumeButton.posThree[1]

//         document.getElementById(staticResumeButton.contentId).style.marginLeft = staticResumeButton.posThree[0]
//         document.getElementById(staticResumeButton.contentId).style.marginLeft = staticResumeButton.posThree[1]

//     }  


//     current = target.order;
// }
