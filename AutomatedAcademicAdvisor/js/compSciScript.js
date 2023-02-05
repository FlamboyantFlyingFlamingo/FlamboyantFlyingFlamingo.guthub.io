// let noOfCharac = 75;
// let contents = document.querySelectorAll(".content");
// contents.forEach(content => {
//     //If text length is less that noOfCharac... then hide the read more button
//     if(content.textContent.length < noOfCharac){
//         content.nextElementSibling.style.display = "none";
//     }
//     else{
//         let displayText = content.textContent.slice(0,noOfCharac);
//         let moreText = content.textContent.slice(noOfCharac);
//         content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
//     }
// });

function readMore(btn){

    let post = btn.parentElement;

    console.log(post.querySelector(".dots"));

    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");

}

//select the element and toggle the class to change the icons. Check the state and set the text
function changeIcon(anchor) {
    var icon = anchor.querySelector("i");
    icon.classList.toggle('fa-chevron-right');
    icon.classList.toggle('fa-chevron-up');
  
     anchor.querySelector("span").textContent = icon.classList.contains('fa-chevron-right') ? "Read More" : "Read Less";
  }

////START OF DROP DOWN CODE////

  const content0 = 
  `
    <div class="card card1">
    <!-- <div class="container">
        <img src="singapore.jpg" alt="Singapore">
    </div> -->
    <div class="details">
        <h3>Preliminary Courses </h3>
    </div>
    </div>

    <div class="card card1">
    <!-- <div class="container">
        <img src="las vegas.jpg" alt="las vegas">
    </div> -->

    <div class="details">
        <h3>Level I (15 Credits)</h3>
    </div>
    </div>

    <div class="card card2">
    <!-- <div class="container">
        <img src="newyork.jpg" alt="New York">
    </div> -->
    <div class="details">
        <h3>Level II (15 Credits)</h3>
    </div>
    </div>

    <div class="card card3">
    <!-- <div class="container">
        <img src="singapore.jpg" alt="Singapore">
    </div> -->
    <div class="details">
        <h3>Level III (15 Credits)</h3>
    </div>
    </div>
  `;

  const content1 = 
  `
      <div class="card card1">
  
          <div class="details">
              <h3>Computer Science Electives</h3>
              
              <h3>COMP2245 Web Development Concepts, Tools and Practices </h3>
              <div class="sameLine">
                  <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                  <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                  <i class="fa fa-chevron-right"></i>
                  <span>Read More</span>
                  </a>
              </div> 
  
              <h3>COMP2410 Computing in the Digital Age</h3>
              <div class="sameLine">
                  <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                  <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                  <i class="fa fa-chevron-right"></i>
                  <span>Read More</span>
                  </a>
              </div> 
  
              <h3>COMP2415 Information Technology Engineering</h3>
              <div class="sameLine">
                  <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                  <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                  <i class="fa fa-chevron-right"></i>
                  <span>Read More</span>
                  </a>
              </div> 
  
              <h3>COMP2950 Computer Science Elective</h3>
              <div class="sameLine">
                  <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                  <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                  <i class="fa fa-chevron-right"></i>
                  <span>Read More</span>
                  </a>
              </div> 
  
  
              <h3>COMP3365 Networks III</h3>
              <div class="sameLine">
                  <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                  <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                  <i class="fa fa-chevron-right"></i>
                  <span>Read More</span>
                  </a>
              </div> 
  
              <h3>COMP3450 Fundamentals of Artificial Intelligence</h3>
              <div class="sameLine">
                  <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                  <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                  <i class="fa fa-chevron-right"></i>
                  <span>Read More</span>
                  </a>
              </div> 
  
              <h3>COMP3370 Software Engineering On A Large Scale</h3>
              <div class="sameLine">
                  <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                  <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                  <i class="fa fa-chevron-right"></i>
                  <span>Read More</span>
                  </a>
              </div> 
  
  
              <h3>COMP3375 Software Testing and Quality</h3>
              <div class="sameLine">
                  <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                  <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                  <i class="fa fa-chevron-right"></i>
                  <span>Read More</span>
                  </a>
              </div> 
  
              <h3>COMP3385 Framework Design For Advanced Web Development</h3>
              <div class="sameLine">
                  <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                  <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                  <i class="fa fa-chevron-right"></i>
                  <span>Read More</span>
                  </a>
              </div> 
  
              <h3>COMP3412 Scalable Enterprise Web Applications</h3>
              <div class="sameLine">
                  <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                  <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                  <i class="fa fa-chevron-right"></i>
                  <span>Read More</span>
                  </a>
              </div> 
  
              <h3>COMP3415 Database Management Systems II</h3>
              <div class="sameLine">
                  <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                  <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                  <i class="fa fa-chevron-right"></i>
                  <span>Read More</span>
                  </a>
              </div> 
  
  
              <h3>COMP3420 Computer Graphics</h3>
              <div class="sameLine">
                  <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                  <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                  <i class="fa fa-chevron-right"></i>
                  <span>Read More</span>
                  </a>
              </div> 
  
              <h3>COMP3425 Mobile Applications for iOS Devices</h3>
              <div class="sameLine">
                  <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                  <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                  <i class="fa fa-chevron-right"></i>
                  <span>Read More</span>
                  </a>
              </div> 
  
  
              <h3>COMP3435 User-Interface Design</h3>
              <div class="sameLine">
                  <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                  <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                  <i class="fa fa-chevron-right"></i>
                  <span>Read More</span>
                  </a>
              </div> 
  
              <h3>COMP3440 E-Commerce</h3>
              <div class="sameLine">
                  <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                  <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                  <i class="fa fa-chevron-right"></i>
                  <span>Read More</span>
                  </a>
              </div> 
  
  
              <h3>COMP3445 Computer Information Systems</h3>
              <div class="sameLine">
                  <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                  <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                  <i class="fa fa-chevron-right"></i>
                  <span>Read More</span>
                  </a>
              </div> 
  
  
              <h3>COMP3955 Computer Science Internship</h3>
              <div class="sameLine">
                  <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                  <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                  <i class="fa fa-chevron-right"></i>
                  <span>Read More</span>
                  </a>
              </div> 
  
      
          </div> <!--End of Single Card DETAILS-->
  
      </div> <!--End of Single Card CONTAINER-->
     
  `;

  const content2 = 
  `
    <div class="card card1">

        <div class="details">
            <h3>Preliminary Courses </h3>
            
            <h3>COMP0001 PRELIMINARY COMPUTER SCIENCE I </h3>
            <div class="sameLine">
                <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                <i class="fa fa-chevron-right"></i>
                <span>Read More</span>
                </a>
            </div> 

            <h3>COMP0002 PRELIMINARY COMPUTER SCIENCE II</h3>
            <div class="sameLine">
                <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                <i class="fa fa-chevron-right"></i>
                <span>Read More</span>
                </a>
            </div> 

        </div> <!--End of Single Card DETAILS-->

    </div> <!--End of Single Card CONTAINER-->
    
    <div class="card card1">

        <div class="details">

            <h3>Level I (15 Credits)</h3>

            <h3>COMP1170 Entrepreneurship for Computer Scientists</h3>
                <div class="sameLine">
                    <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempora rem ad cupiditate! Commodi doloremque atque asperiores optio molestiae, similique </p>
                    <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                    <i class="fa fa-chevron-right"></i>
                    <span>Read More</span>
                    </a>
                </div>

            <h3>COMP1180 Mathematics for Comp Sci I</h3>
                <div class="sameLine">
                    <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                    <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                    <i class="fa fa-chevron-right"></i>
                    <span>Read More</span>
                    </a>
                </div>

            <h3>COMP1205 Computing I</h3>
                <div class="sameLine">
                    <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                    <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                    <i class="fa fa-chevron-right"></i>
                    <span>Read More</span>
                    </a>
                </div>   

            <h3>COMP1210 Computing II</h3>
                <div class="sameLine">
                    <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                    <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                    <i class="fa fa-chevron-right"></i>
                    <span>Read More</span>
                    </a>
                </div>

            <h3>COMP1215 UNIX</h3>
                <div class="sameLine">
                    <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                    <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                    <i class="fa fa-chevron-right"></i>
                    <span>Read More</span>
                    </a>
                </div>

        </div> <!--End of Single Card DETAILS-->

    </div> <!--End of Single Card CONTAINER-->

    <div class="card card2">

        <div class="details">

            <h3>Level II (15 Credits)</h3>

            <h3>COMP2210 Mathematics for Computer Science II</h3>
                <div class="sameLine">
                    <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                    <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                    <i class="fa fa-chevron-right"></i>
                    <span>Read More</span>
                    </a>
                </div>

            <h3>COMP2220 Computer System Architecture</h3>
                <div class="sameLine">
                    <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                    <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                    <i class="fa fa-chevron-right"></i>
                    <span>Read More</span>
                    </a>
                </div>
                            
            <h3>COMP2225 Software Engineering</h3>
                <div class="sameLine">
                    <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                    <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                    <i class="fa fa-chevron-right"></i>
                    <span>Read More</span>
                    </a>
                </div>   

            <h3>COMP2232 Object-Oriented Programming Concepts </h3>
                <div class="sameLine">
                    <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                    <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                    <i class="fa fa-chevron-right"></i>
                    <span>Read More</span>
                    </a>
                </div>

            <h3>COMP2611 Data Structures</h3>
                <div class="sameLine">
                    <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                    <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                    <i class="fa fa-chevron-right"></i>
                    <span>Read More</span>
                    </a>
                </div>

        </div> <!--End of Single Card DETAILS-->

    </div> <!--End of Single Card CONTAINER-->

    <div class="card card3">
 
            <div class="details">
            
                <h3>Level III (15 Credits)</h3>

                <h3>COMP3310 Algorithms</h3>
                <div class="sameLine">
                    <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                    <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                    <i class="fa fa-chevron-right"></i>
                    <span>Read More</span>
                    </a>
                </div>
                
                <h3>COMP3320 Design Principles of Operating Systems</h3>
                <div class="sameLine">
                    <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                    <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                    <i class="fa fa-chevron-right"></i>
                    <span>Read More</span>
                    </a>
                </div>
                
                <h3>COMP3330 Database Management Systems I</h3>
                <div class="sameLine">
                    <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                    <a class="moreLessLink"onclick="readMore(this);changeIcon(this)">
                    <i class="fa fa-chevron-right"></i>
                    <span>Read More</span>
                    </a>
                </div>
                
            </div> <!--End of Single Card DETAILS-->

    </div> <!--End of Single Card CONTAINER-->
  `;
  

  
  const content3 = `
    <h1>Content 3</h1>
    <p>This is content 3.</p>
  `;
  
  const select = document.getElementById('myselect');
  const content = document.getElementById('cards');
  
  select.addEventListener('change', (event) => { 
    const value = event.target.value;

    //fill in the grids with the prewritten content
    if (value === 'content0') {
      content.innerHTML = content0;
    } else if (value === 'content1') {
      content.innerHTML = content1;
    } else if (value === 'content2') {
      content.innerHTML = content2;
    } else if (value == 'content3')  {
      content.innerHTML = content3;
    }

    //after the specified content is filled in, had to create the span class for the hide button
    //since it is not in the prewritten code, otherwise when you click read more, it doesnt woek
    let noOfCharac = 75;
    let contents = document.querySelectorAll(".content");
    contents.forEach(content => {
        //If text length is less that noOfCharac... then hide the read more button
        if(content.textContent.length < noOfCharac){
            content.nextElementSibling.style.display = "none";
        }
        else{
            let displayText = content.textContent.slice(0,noOfCharac);
            let moreText = content.textContent.slice(noOfCharac);
            content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
        }
    });

  });

//For the NAV bar
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }