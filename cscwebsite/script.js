
// coundowntimer
// const days=document.getElementById("day");
// const hours=document.getElementById("hours");
// const minutes=document.getElementById("minutes");
// const seconds=document.getElementById("seconds");



// function UpdateTime(){
//     const currentYear=new Date().getFullYear();
//     const newYear=new Date(`january 1 ${currentYear+1} 00:00:00`);
//     const currentDate=new Date();
//     const diff=newYear-currentDate;
//     const d=Math.floor(diff/1000/60/60/24);
//     const h=Math.floor((diff/1000/60/60)%24);
//     const m=Math.floor((diff/1000/60)%60);
//     const s=Math.floor((diff/1000)%60);

//     days.innerHTML=d<10?"0"+d:d;
//     hours.innerHTML=h<10?"0"+h:h;
//     minutes.innerHTML=m<10?"0"+m:m;
//     seconds.innerHTML=s<10?"0"+s:s;

// }

// setInterval(UpdateTime,1000);

// contact_mail
// const e_name=document.getElementById("e-name").value;
// const e_email=document.getElementById("e-email").value;
// const e_subject=document.getElementById("e-subject").value;
// const e_message=document.getElementById("e-message").value;



function sendMail(){
    const e_name=document.getElementById("e-name").value;
    const e_email=document.getElementById("e-email").value;
    const e_subject=document.getElementById("e-subject").value;
    const e_message=document.getElementById("e-message").value;

    const body_msg=`Name:  ${e_name}
                    Email:  ${e_email}
                    Subject:  ${e_subject}
                    Message:  ${e_message}`;
    console.log(body_msg);

    var params ={
        e_name: document.getElementById("e-name").value,
        e_email: document.getElementById("e-email").value,
        message: body_msg,
        m_name:"CSC team",

    };

    const serviceID="service_epb7v19";
    const templateID="template_sup43eb";

    emailjs.send(serviceID,templateID,params).then((res) =>{
            document.getElementById("e-name").value=""
            document.getElementById("e-email").value=""
            document.getElementById("e-subject").value=""
            document.getElementById("e-message").value=""

            console.log(res);
            alert("your message send successfully");
        }
    )
    .catch(err=>console.log(err));

}

//register maill
function sendRegister(){
    const r_name=document.getElementById("r-name").value;
    const r_email=document.getElementById("r-email").value;
    const r_course=document.getElementById("r-course").value;
    const r_phone=document.getElementById("r-phone").value;
    const r_city=document.getElementById("r-city").value;

    const body_msg=`Name:  ${r_name}
                    Email:  ${r_email}
                    Course:  ${r_course}
                    phone:  ${r_phone}
                    city:  ${r_city}`;
                    
    console.log(body_msg);

    var params ={
        e_name: document.getElementById("r-name").value,
        e_email: document.getElementById("r-email").value,
        message: body_msg,
        m_name:"CSC team",

    };

    const serviceID="service_epb7v19";
    const templateID="template_sup43eb";

    emailjs.send(serviceID,templateID,params).then((res) =>{
            document.getElementById("r-name").value=""
            document.getElementById("r-email").value=""
            document.getElementById("r-course").value=""
            document.getElementById("r-phone").value=""
            document.getElementById("r-city").value=""

            console.log(res);
            alert("your Registered successfully");
        }
    )
    .catch(err=>console.log(err));

}

