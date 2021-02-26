<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script type="text/javascript">
function doSubmit() {
document.myform.aufloesung_b.value=screen.width;
document.myform.aufloesung_h.value=screen.height;
document.myform.submit();
}


// define the function with your source as parameter
function __exec(params) {
// declare the object "vCont" to which you later want to "assign" the source content
var vCont = document.getElementById('valContainer'),
//var i = document.getElementById('valContainer'),
// Initialize the output variable "vContCnt" by first setting a line break
vContCnt;
//ii = 0;
// Fill the output variable "vContCnt" in a loop, concatenating all values from the source array

vContCnt = params[0];
//ii = ii + 1;
/* publish the output variable "vContCnt" inside the HTML tag of the object "vCont" declared above. This is done by
manipulating the "innerHTML" property of the object "vCont" */
vCont.innerHTML = vContCnt;
console.log("meh")
//i.innerHTML = ii;
doSubmit();
}

</script>
</head>
<body>

<form name="myform" action="testpost.php" method="post">
<input type="hidden" name="aufloesung_b">
<input type="hidden" name="aufloesung_h">
</form>

<script type="text/javascript">




  __exec(params);





</script>

<div id="valContainer" style="position: inherit; width: 200px; height: 200px;"></div>


</body>
</html>