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
                    document.getElementById(loopObj.contentId).style.transform = "translate3d(0, -92vh, 0)";
                } else if (loopObj.order == 2) {
                    document.getElementById(loopObj.contentId).style.transform = "translate3d(0, -184vh, 0)";
                } else {
                    document.getElementById(loopObj.contentId).style.transform = "translate3d(0, 0, 0)"};

            } else if (loopObj.order - target.order == 1) {
                if (loopObj.order == 1) {
                    document.getElementById(loopObj.contentId).style.transform = "translate3d(100vw, -92vh, 0)";
                    // document.getElementById(looObj.buttonId).style.backgroundColor = "black";
                } else {
                    document.getElementById(loopObj.contentId).style.transform = "translate3d(100vw, -184vh, 0)";
                    // document.getElementById(looObj.buttonId).style.backgroundColor = "black";
                };

            } else if (loopObj.order - target.order == -1) {
                if (loopObj.order == 1) {
                    document.getElementById(loopObj.contentId).style.transform = "translate3d(100vw, -92vh, 0)";
                    // document.getElementById(looObj.buttonId).style.backgroundColor = "black";
                } else {
                    document.getElementById(loopObj.contentId).style.transform = "translate3d(100vw, 0, 0)";
                    // document.getElementById(looObj.buttonId).style.backgroundColor = "black";
                };

            } else if (loopObj.order - target.order == 2) {
                document.getElementById(loopObj.contentId).style.transform = "translate3d(100vw, -184vh, 0)";
                // document.getElementById(looObj.buttonId).style.backgroundColor = "black";
            } else if (loopObj.order - target.order == -2) {
                document.getElementById(loopObj.contentId).style.transform = "translate3d(100vw, 0, 0)";
                // document.getElementById(looObj.buttonId).style.backgroundColor = "black";
            };

        })(x);
    
    };



    current = target.order;
    // document.getElementById(target.buttonId).style.backgroundColor = "rgb(70, 70, 70)"
}

