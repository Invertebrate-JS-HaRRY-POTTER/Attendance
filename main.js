var nameOfStudentArray = [];

function submit(){
    var name1= document.getElementById("nameOfStudent1").value;
    var name2= document.getElementById("nameOfStudent2").value;
    var name3= document.getElementById("nameOfStudent3").value;
    var name4= document.getElementById("nameOfStudent4").value;

    nameOfStudentArray.push(name1);
    nameOfStudentArray.push(name2);
    nameOfStudentArray.push(name3);
    nameOfStudentArray.push(name4);

    console.log(nameOfStudentArray);
    document.getElementById("display_name").innerHTML = nameOfStudentArray;

    document.getElementById("button_submit").style.display = "none";
    document.getElementById("button_sort").style.display = "inline-block";
}

function sorting(){
    nameOfStudentArray.sort();
    console.log(nameOfStudentArray);
    document.getElementById("display_name").innerHTML = nameOfStudentArray;
}