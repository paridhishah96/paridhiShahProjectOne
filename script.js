// Pseudo Code - Making the blog comments section interactive

// retrieve information from form once user submits it (event listener)
    // define a variable for the form element
    // event listener upon submit
        // prevent default
        // save user data into variables
// use the retreived information and append it to html

const formEl = document.querySelector("form");
const commentSection = document.querySelector(".blogComments");
//Add event listener on submit 
formEl.addEventListener("submit", function(event){
    // Prevent the page from refreshing upon submission
    event.preventDefault();
    // save user input that I will need to variables
    const userName = formEl.querySelectorAll("input")[0].value;
    const userComment = formEl.querySelector("textarea").value;
    // Using template literals, add the user data gathered into html elements
    const userCommentDiv = `<div class="commentImage">
        <img src="./assets/default-comment-display-image.png" alt="Default Image of commentor">
    </div>
    <div class="commentInfo">
        <p class="commentorName">${userName}<span><a href=""> -Reply</a></span></p>
        <p class="commentText">${userComment}</p>
        <p class="commentDate">July 2015 at 15 hours ago</p>
    </div>
    ` 
     console.log(userCommentDiv);
    // create a div to hold the individualComment
    const individualCommentDiv = document.createElement("div");
    // adding the class so the CSS styling can remain constant
    individualCommentDiv.classList.add("individualComment");
    // appending the html elements with user data as the div's child
    commentSection.appendChild(individualCommentDiv);
    individualCommentDiv.innerHTML = userCommentDiv;
})
