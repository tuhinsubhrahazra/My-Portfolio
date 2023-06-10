
// for autotype text 

// const { all } = require("express/lib/application");

let arr = [];
arr.push("Tuhin Subhra Hazra");
arr.push("a Student Of IT");
arr.push("Studing in CEMK");

let i = -1;
let j = 0;
autoType();
function autoType() {
    if (i++ < arr[j].length) {
        document.getElementById("text").innerHTML += arr[j].charAt(i);
        setTimeout(autoType, 60);
    }
    else setTimeout(autoslice, 500);
}

function autoslice() {
    if (i >= 0) {
        let st = document.getElementById("text").innerHTML;
        st = st.slice(0, i--);
        document.getElementById("text").innerHTML = st;
        setTimeout(autoslice, 60);
    }
    else {
        j++;
        setTimeout(autoType, 500);
        if (j == 3) j = 0;
    }
}

// for buttom press

document.getElementById("all").classList.add("change-btn1");
document.getElementById("android").classList.add("change-btn2");
document.getElementById("web").classList.add("change-btn2");

document.getElementById("all-container").classList.add("show_projects");
document.getElementById("android-container").classList.add("hide_projects");
document.getElementById("web-container").classList.add("hide_projects");

document.getElementById("all").addEventListener("click", function(){
    document.getElementById("android").classList.remove("change-btn1");
    document.getElementById("android").classList.add("change-btn2");
    document.getElementById("web").classList.remove("change-btn1");
    document.getElementById("web").classList.add("change-btn2");

    document.getElementById("all").classList.remove("change-btn2");
    document.getElementById("all").classList.add("change-btn1");

    document.getElementById("android-container").classList.remove("show_projects");
    document.getElementById("android-container").classList.add("hide_projects");
    document.getElementById("web-container").classList.remove("show_projects");
    document.getElementById("web-container").classList.add("hide_projects");
    document.getElementById("all-container").classList.remove("hide_projects");
    document.getElementById("all-container").classList.add("show_projects");
});

document.getElementById("android").addEventListener("click", function(){
    document.getElementById("all").classList.remove("change-btn1");
    document.getElementById("all").classList.add("change-btn2");
    document.getElementById("web").classList.remove("change-btn1");
    document.getElementById("web").classList.add("change-btn2");

    document.getElementById("android").classList.remove("change-btn2");
    document.getElementById("android").classList.add("change-btn1");

    document.getElementById("all-container").classList.remove("show_projects");
    document.getElementById("all-container").classList.add("hide_projects");
    document.getElementById("web-container").classList.remove("show_projects");
    document.getElementById("web-container").classList.add("hide_projects");
    document.getElementById("android-container").classList.remove("hide_projects");
    document.getElementById("android-container").classList.add("show_projects");
});

document.getElementById("web").addEventListener("click", function(){
    document.getElementById("all").classList.remove("change-btn1");
    document.getElementById("all").classList.add("change-btn2");
    document.getElementById("android").classList.remove("change-btn1");
    document.getElementById("android").classList.add("change-btn2");

    document.getElementById("web").classList.remove("change-btn2");
    document.getElementById("web").classList.add("change-btn1");

    document.getElementById("android-container").classList.remove("show_projects");
    document.getElementById("android-container").classList.add("hide_projects");
    document.getElementById("all-container").classList.remove("show_projects");
    document.getElementById("all-container").classList.add("hide_projects");
    document.getElementById("web-container").classList.remove("hide_projects");
    document.getElementById("web-container").classList.add("show_projects");
});

// for scrooling animation 

window.addEventListener('scroll',function(){
    let screenPos = this.window.innerHeight/1.2;
    
    let about_heading = this.document.querySelector(".about-heading");
    let skil_heading = this.document.querySelector(".skil-heading");
    let project_heading = this.document.querySelector(".project-heading");
    let contact_heading = this.document.querySelector(".contact-heading");

    let about_heading_underline = this.document.querySelector(".about_underLine");
    let skill_underLine = this.document.querySelector(".skill_underLine");
    let project_underLine = this.document.querySelector(".project_underLine");
    let contact_underLine = this.document.querySelector(".contact_underLine");

    let containers = this.document.querySelector(".containers");

    let sBtn1 = this.document.querySelector(".sBtn1");
    let sBtn2 = this.document.querySelector(".sBtn2");
    let sBtn3 = this.document.querySelector(".sBtn3");
    let sBtn4 = this.document.querySelector(".sBtn4");
    let sBtn5 = this.document.querySelector(".sBtn5");
    let sBtn6 = this.document.querySelector(".sBtn6");
    let sBtn7 = this.document.querySelector(".sBtn7");
    let sBtn8 = this.document.querySelector(".sBtn8");
    let sBtn9 = this.document.querySelector(".sBtn9");
    let sBtn10 = this.document.querySelector(".sBtn10");
    let sBtn11 = this.document.querySelector(".sBtn11");
    let sBtn12 = this.document.querySelector(".sBtn12");
    let sBtn13 = this.document.querySelector(".sBtn13");
    let sBtn14 = this.document.querySelector(".sBtn14");
    let sBtn15 = this.document.querySelector(".sBtn15");
    let sBtn16 = this.document.querySelector(".sBtn16");
    let sBtn17 = this.document.querySelector(".sBtn17");
    let sBtn18 = this.document.querySelector(".sBtn18");

    let pc1 = this.document.querySelector("#prcn1");
    let pc2 = this.document.querySelector("#prcn2");
    let pc3 = this.document.querySelector("#prcn3");
    let pc4 = this.document.querySelector("#prcn4");
    let pc5 = this.document.querySelector("#prcn5");
    let pc6 = this.document.querySelector("#prcn6");
    let pc7 = this.document.querySelector("#prcn7");
    let pc8 = this.document.querySelector("#prcn8");
    let pc9 = this.document.querySelector("#prcn9");
    let pc10 = this.document.querySelector("#prcn10");
    let pc11 = this.document.querySelector("#prcn11");
    let pc12 = this.document.querySelector("#prcn12");
    let pc13 = this.document.querySelector("#prcn13");
    let pc14 = this.document.querySelector("#prcn14");
    let pc15 = this.document.querySelector("#prcn15");
    let pc16 = this.document.querySelector("#prcn16");
    
    let animate = this.document.querySelector(".animate");
    let animate_1 = this.document.querySelector(".animate-1");
    let animate1 = this.document.querySelector(".animate1");
    let animate2 = this.document.querySelector(".animate2");
    let animate3 = this.document.querySelector(".animate3");

    let project_btns = this.document.querySelector(".project-btns");

    let contact_btn1 = this.document.querySelector(".contact_btn1");
    let contact_btn2 = this.document.querySelector(".contact_btn2");
    let contact_btn3 = this.document.querySelector(".contact_btn3");

    let cinput = this.document.querySelector(".c-input");

    //skills

    if(sBtn1.getBoundingClientRect().top < screenPos){
        sBtn1.classList.add("active");
    }
    else{
        sBtn1.classList.remove("active");
    }

    if(sBtn2.getBoundingClientRect().top < screenPos){
        sBtn2.classList.add("active");
    }
    else{
        sBtn2.classList.remove("active");
    }

    if(sBtn3.getBoundingClientRect().top < screenPos){
        sBtn3.classList.add("active");
    }
    else{
        sBtn3.classList.remove("active");
    }

    if(sBtn4.getBoundingClientRect().top < screenPos){
        sBtn4.classList.add("active");
    }
    else{
        sBtn4.classList.remove("active");
    }

    if(sBtn5.getBoundingClientRect().top < screenPos){
        sBtn5.classList.add("active");
    }
    else{
        sBtn5.classList.remove("active");
    }

    if(sBtn6.getBoundingClientRect().top < screenPos){
        sBtn6.classList.add("active");
    }
    else{
        sBtn6.classList.remove("active");
    }

    if(sBtn7.getBoundingClientRect().top < screenPos){
        sBtn7.classList.add("active");
    }
    else{
        sBtn7.classList.remove("active");
    }

    if(sBtn8.getBoundingClientRect().top < screenPos){
        sBtn8.classList.add("active");
    }
    else{
        sBtn8.classList.remove("active");
    }

    if(sBtn9.getBoundingClientRect().top < screenPos){
        sBtn9.classList.add("active");
    }
    else{
        sBtn9.classList.remove("active");
    }

    if(sBtn10.getBoundingClientRect().top < screenPos){
        sBtn10.classList.add("active");
    }
    else{
        sBtn10.classList.remove("active");
    }

    if(sBtn11.getBoundingClientRect().top < screenPos){
        sBtn11.classList.add("active");
    }
    else{
        sBtn11.classList.remove("active");
    }

    if(sBtn12.getBoundingClientRect().top < screenPos){
        sBtn12.classList.add("active");
    }
    else{
        sBtn12.classList.remove("active");
    }

    if(sBtn13.getBoundingClientRect().top < screenPos){
        sBtn13.classList.add("active");
    }
    else{
        sBtn13.classList.remove("active");
    }

    if(sBtn14.getBoundingClientRect().top < screenPos){
        sBtn14.classList.add("active");
    }
    else{
        sBtn14.classList.remove("active");
    }

    if(sBtn15.getBoundingClientRect().top < screenPos){
        sBtn15.classList.add("active");
    }
    else{
        sBtn15.classList.remove("active");
    }

    if(sBtn16.getBoundingClientRect().top < screenPos){
        sBtn16.classList.add("active");
    }
    else{
        sBtn16.classList.remove("active");
    }

    if(sBtn17.getBoundingClientRect().top < screenPos){
        sBtn17.classList.add("active");
    }
    else{
        sBtn17.classList.remove("active");
    }

    if(sBtn18.getBoundingClientRect().top < screenPos){
        sBtn18.classList.add("active");
    }
    else{
        sBtn18.classList.remove("active");
    }
    
    // About section 

    if(about_heading.getBoundingClientRect().top <screenPos){
        about_heading.classList.remove('heading_offset0');
        about_heading.classList.add('heading_offset1');
    }
    else{
        about_heading.classList.remove('heading_offset1');
        about_heading.classList.add('heading_offset0');
    }
    
    if(about_heading_underline.getBoundingClientRect().top<screenPos){
        about_heading_underline.classList.remove('underLine_offset0');
        about_heading_underline.classList.add('underLine_offset1');
    }
    else{
        about_heading_underline.classList.remove('underLine_offset1');
        about_heading_underline.classList.add('underLine_offset0');
    }

    // Skill Scetion
    
    if(skil_heading.getBoundingClientRect().top <screenPos){
        skil_heading.classList.remove('heading_offset0');
        skil_heading.classList.add('heading_offset1');
    }
    else{
        skil_heading.classList.remove('heading_offset1');
        skil_heading.classList.add('heading_offset0');
    }
    
    if(skill_underLine.getBoundingClientRect().top<screenPos){
        skill_underLine.classList.remove('underLine_offset0');
        skill_underLine.classList.add('underLine_offset1');
    }
    else{
        skill_underLine.classList.remove('underLine_offset1');
        skill_underLine.classList.add('underLine_offset0');
    }

    // Project Scetion
    
    if(project_heading.getBoundingClientRect().top <screenPos){
        project_heading.classList.remove('heading_offset0');
        project_heading.classList.add('heading_offset1');
    }
    else{
        project_heading.classList.remove('heading_offset1');
        project_heading.classList.add('heading_offset0');
    }
    
    if(project_underLine.getBoundingClientRect().top<screenPos){
        project_underLine.classList.remove('underLine_offset0');
        project_underLine.classList.add('underLine_offset1');
    }
    else{
        project_underLine.classList.remove('underLine_offset1');
        project_underLine.classList.add('underLine_offset0');
    }

    // if(containers.getBoundingClientRect().top < screenPos){
    //     containers.classList.remove('animation0');
    //     containers.classList.add('animation1');
    // }
    // else{
    //     containers.classList.remove('animation1');
    //     containers.classList.add('animation0');
    // }

    if(pc1.getBoundingClientRect().top < screenPos){
        pc1.classList.remove('animation0');
        pc1.classList.add('animation1');
    }
    else{
        pc1.classList.remove('animation1');
        pc1.classList.add('animation0');
    }

    if(pc2.getBoundingClientRect().top < screenPos){
        pc2.classList.remove('animation0');
        pc2.classList.add('animation1');
    }
    else{
        pc2.classList.remove('animation1');
        pc2.classList.add('animation0');
    }

    if(pc3.getBoundingClientRect().top < screenPos){
        pc3.classList.remove('animation0');
        pc3.classList.add('animation1');
    }
    else{
        pc3.classList.remove('animation1');
        pc3.classList.add('animation0');
    }

    if(pc4.getBoundingClientRect().top < screenPos){
        pc4.classList.remove('animation0');
        pc4.classList.add('animation1');
    }
    else{
        pc4.classList.remove('animation1');
        pc4.classList.add('animation0');
    }

    if(pc5.getBoundingClientRect().top < screenPos){
        pc5.classList.remove('animation0');
        pc5.classList.add('animation1');
    }
    else{
        pc5.classList.remove('animation1');
        pc5.classList.add('animation0');
    }

    if(pc6.getBoundingClientRect().top < screenPos){
        pc6.classList.remove('animation0');
        pc6.classList.add('animation1');
    }
    else{
        pc6.classList.remove('animation1');
        pc6.classList.add('animation0');
    }

    if(pc7.getBoundingClientRect().top < screenPos){
        pc7.classList.remove('animation0');
        pc7.classList.add('animation1');
    }
    else{
        pc7.classList.remove('animation1');
        pc7.classList.add('animation0');
    }

    if(pc8.getBoundingClientRect().top < screenPos){
        pc8.classList.remove('animation0');
        pc8.classList.add('animation1');
    }
    else{
        pc8.classList.remove('animation1');
        pc8.classList.add('animation0');
    }
    
    if(pc9.getBoundingClientRect().top < screenPos){
        pc9.classList.remove('animation0');
        pc9.classList.add('animation1');
    }
    else{
        pc9.classList.remove('animation1');
        pc9.classList.add('animation0');
    }

    if(pc10.getBoundingClientRect().top < screenPos){
        pc10.classList.remove('animation0');
        pc10.classList.add('animation1');
    }
    else{
        pc10.classList.remove('animation1');
        pc10.classList.add('animation0');
    }

    if(pc11.getBoundingClientRect().top < screenPos){
        pc11.classList.remove('animation0');
        pc11.classList.add('animation1');
    }
    else{
        pc11.classList.remove('animation1');
        pc11.classList.add('animation0');
    }

    if(pc12.getBoundingClientRect().top < screenPos){
        pc12.classList.remove('animation0');
        pc12.classList.add('animation1');
    }
    else{
        pc12.classList.remove('animation1');
        pc12.classList.add('animation0');
    }

    if(pc13.getBoundingClientRect().top < screenPos){
        pc13.classList.remove('animation0');
        pc13.classList.add('animation1');
    }
    else{
        pc13.classList.remove('animation1');
        pc13.classList.add('animation0');
    }

    if(pc14.getBoundingClientRect().top < screenPos){
        pc14.classList.remove('animation0');
        pc14.classList.add('animation1');
    }
    else{
        pc14.classList.remove('animation1');
        pc14.classList.add('animation0');
    }

    if(pc15.getBoundingClientRect().top < screenPos){
        pc15.classList.remove('animation0');
        pc15.classList.add('animation1');
    }
    else{
        pc15.classList.remove('animation1');
        pc15.classList.add('animation0');
    }

    if(pc16.getBoundingClientRect().top < screenPos){
        pc16.classList.remove('animation0');
        pc16.classList.add('animation1');
    }
    else{
        pc16.classList.remove('animation1');
        pc16.classList.add('animation0');
    }


    // Contact section

    if(contact_heading.getBoundingClientRect().top <screenPos){
        contact_heading.classList.remove('heading_offset0');
        contact_heading.classList.add('heading_offset1');
    }
    else{
        contact_heading.classList.remove('heading_offset1');
        contact_heading.classList.add('heading_offset0');
    }

    if(contact_underLine.getBoundingClientRect().top<screenPos){
        contact_underLine.classList.remove('underLine_offset0');
        contact_underLine.classList.add('underLine_offset1');
    }
    else{
        contact_underLine.classList.remove('underLine_offset1');
        contact_underLine.classList.add('underLine_offset0');
    }
    
    if(contact_btn1.getBoundingClientRect().top < screenPos){
        contact_btn1.classList.add("active_contact_btn");
    }
    else{
        contact_btn1.classList.remove("active_contact_btn");
    }

    if(contact_btn2.getBoundingClientRect().top < screenPos){
        contact_btn2.classList.add("active_contact_btn");
    }
    else{
        contact_btn2.classList.remove("active_contact_btn");
    }

    if(contact_btn3.getBoundingClientRect().top < screenPos){
        contact_btn3.classList.add("active_contact_btn");
    }
    else{
        contact_btn3.classList.remove("active_contact_btn");
    }

    if(cinput.getBoundingClientRect().top < screenPos){
        cinput.classList.remove('animation2');
        cinput.classList.add('animation3');
    }
    else{
        cinput.classList.remove('animation3');
        cinput.classList.add('animation2');
    }

    // Other

    if(project_btns.getBoundingClientRect().top < screenPos){
        project_btns.classList.remove('animation0');
        project_btns.classList.add('animation1');
    }
    else{
        project_btns.classList.remove('animation1');
        project_btns.classList.add('animation0');
    }

    if(animate_1.getBoundingClientRect().top < screenPos){
        animate_1.classList.remove('animation0');
        animate_1.classList.add('animation1');
    }
    else{
        animate_1.classList.remove('animation1');
        animate_1.classList.add('animation0');
    }

    if(animate.getBoundingClientRect().top < screenPos){
        animate.classList.remove('animation0');
        animate.classList.add('animation1');
    }
    else{
        animate.classList.remove('animation1');
        animate.classList.add('animation0');
    }

    if(animate1.getBoundingClientRect().top < screenPos){
        animate1.classList.remove('animation0');
        animate1.classList.add('animation1');
    }
    else{
        animate1.classList.remove('animation1');
        animate1.classList.add('animation0');
    }

    if(animate2.getBoundingClientRect().top/1.6 < screenPos){
        animate2.classList.remove('animation0');
        animate2.classList.add('animation1');
    }
    else{
        animate2.classList.remove('animation1');
        animate2.classList.add('animation0');
    }

    if(animate3.getBoundingClientRect().top < screenPos){
        animate3.classList.remove('animation0');
        animate3.classList.add('animation1');
    }
    else{
        animate3.classList.remove('animation1');
        animate3.classList.add('animation0');
    }

});

// for 3 line button

document.querySelector("#line3").addEventListener("click",function(){
    document.querySelector(".sidePannel").style.display = "block";
    document.querySelector(".sidePannel").style.animation = "run 0.5s";
});

document.querySelector("#x").addEventListener("click",function(){
    document.querySelector(".sidePannel").style.display = "none";
});

document.querySelector(".menu").addEventListener("click",function(){
    document.querySelector(".sidePannel").style.display = "none";
});
