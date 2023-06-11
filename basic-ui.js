
const featureDivs = document.querySelectorAll('.feature-container');

const featureText = [
    {
        title: 'Silent Aim',
        imagePath: './assets/silent-aim.png',
        featureTagline: 'Want to hit your shots while looking unbelievably legitimate?',
        features: ['Nearest Point, instead of hitting the closest body part, you can hit anywhere precisely!', 'Aimviewer bypass, you won\'t get caught when someone aimviews you.','Gun type fov, allows you to change the fov for each gun type (Revolver, Double Barrel, SMG Tactical Shotgun, Shotgun, etc).','Range FOV, allows you to do the same but for each range.','Resolver, resolves everything you can hit with legit aim.','Fov Type 2, instead of the fov following your cursor, it follows the target.']
    },
    {
        title: 'Camlock',
        imagePath: './assets/camlock.png',
        featureTagline: 'Looks insanely legitimate, similar to aimassist:',
        features: ['Allows you to change the prediction and smoothness for air, increasing the shots for you to hit an airshot.', 'Disables on third person option, if you go in third person and you\'re locked on someone it\'ll disable, when you zoom back in first person, it\'ll enable back against that target.', 'Disable on reload option, if turned on, whenever you reload and you\'re locked on someone it\'ll disable until you\'re done reloading, and lock back at that target.']
    },
    {
        title: 'Triggerbot',
        imagePath: './assets/triggerbot.png',
        featureTagline: 'Want to never get caught while hitting insane shots?:',
        features: ['This triggerbot comes with Prediction, allowing you to accurately hit your shots like a  silent aim.','You can change the prediction for each gun type and range.']
    }
]

//This function is used to redraw figures if they happen to have text on them
//This is needed when a user clicks any displayed figures
function redrawFigures(div, index){
     //If the user clicked on text, remove it
     div.querySelector('.feature-text-container').remove()
     //Recreating the removed figure element that will contain both an image and a caption
     const featureFigure = document.createElement('figure')
     featureFigure.classList.toggle('feature-figure-container')
     //Creating the image to display inside the figure
     const featureImg = new Image()
     featureImg.src = featureText[index].imagePath
     //Creatign a figcaption for the figure
     const featureCaption = document.createElement('figcaption')
     featureCaption.textContent = featureText[index].title
     //Appending the elements to their appropriate parent
     div.appendChild(featureFigure)
     featureFigure.appendChild(featureImg)
     featureFigure.appendChild(featureCaption)
}

featureDivs.forEach((div, index) => {
    div.addEventListener('click', e => {
        if(div.querySelector('figure')){
            //redraw the last figure that was turned into text
            //There should always only be one
            const boxToRecreate = document.querySelector('.feature-text-container')
            if(boxToRecreate){
                redrawFigures(boxToRecreate.parentNode, +boxToRecreate.parentNode.getAttribute('id'))
            }
            //If there is a figure, it should be removed when the user clicks it
            div.querySelector('figure').remove()
            //Creating a container for the featureTitle and the featureList
            const featureTextContainer = document.createElement('div')
            featureTextContainer.classList.toggle('feature-text-container')
            //Creating a featureTitle
            const featureTitle = document.createElement('h3')
            featureTitle.textContent = featureText[index].title
            //Create a paragraph to contian the featureHeading alongisde the featureList
            const featureParagraph = document.createElement('p')
            featureParagraph.textContent = featureText[index].featureTagline
            //featureListItems is an array of list items that will be appended to a featureList
            //featureList is an unordered list
            const featureList = document.createElement('ul')
            //Create an array of features
            let featureListItems = []
            for(let i = 0; i < featureText[index].features.length; i++){
                featureListItems[i] = document.createElement('li')
                //Give the current list item text from the feaureText object
                //featureText is an arrya of objects, each object containing a features array
                featureListItems[i].textContent = featureText[index].features[i]
                featureList.appendChild(featureListItems[i])
            }
            //Appending the elements to their appropriate parent
            div.appendChild(featureTextContainer)
            div.style.height = 'auto'
            featureTextContainer.appendChild(featureTitle)
            featureParagraph.appendChild(featureList)
            featureTextContainer.appendChild(featureParagraph)
        } else if(div.querySelector('.feature-text-container')){
           redrawFigures(div, index)
        }
    })
})