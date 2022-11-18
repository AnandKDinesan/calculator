function display(num)
{
    result.value+=num
}
function allclear(){
    result.value=""
}
function evaluation(){
    result.value=eval(result.value)
}
function backspace(){
    result.value=result.value.slice(0,-1)
}