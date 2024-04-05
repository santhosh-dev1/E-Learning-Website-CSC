<?php

    $con=mysqli_connect("localhost","root","","registration");
    if(!$con)
    {
        die('Connection failed!');
    }

    if(isset($_POST['submit']))
    {
        $name=$_POST['name'];
        $course=$_POST['course'];
        $phone=$_POST['phone'];
        $email=$_POST['email'];
        $city=$_POST['city'];
    

    $sql_query ="insert into user_details(name,course,phone,email,city) 
    values('$name','$course','$phone','$email','$city');";

    // if(mysqli_query($con,$sql_query))
    // {
    //     echo "success";
    // }

    // else{
    //     echo "error";
    // }
    mysqli_close($con);
    }
?>