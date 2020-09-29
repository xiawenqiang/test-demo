window.onload=function(){
    let box=document.getElementsByClassName("box");
    console.log(box)
    box[0].addEventListener('click',function(){
        alert('这是测试代码')
    })
}