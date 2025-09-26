function checkeligidlity(){
  let username=prompt("whay is your name?");
  let userage=prompt("how old are you?");
  userage=Number(userage);
  if (userage>=18){
    alert("HELLO"+username+"you are not eligible to vote");
  }
  else{
    alert("SORRY"+username+"you are not eligible to vote");
  }
  let again=confirm("Do you want to check again?");
  if(again){
    checkeligidlity();
  }else{
    alert("Good bye!")
  }
}
checkeligidlity();

let username=prompt("enter your name")
let password=prompt("enter your password")
if(username=="mounika" && password=="book123")
{
  let borrow=confirm("do you want to borrow a book?")

  if(borrow)
  {
    let category =prompt("select your type of book:\n fiction\n science\n history")

    switch(category)
    {
      case"fiction":
          alert("you selected fiction")
          break;
      case"science":
          alert("you selected science")
          break;
      case"history":
          alert("you selected history")
          break;
      default:
          alert("invalid category")
    }
  }
  else{
    alert("May be next time! goodbye! buddy")
  }
}
else{
  alert("invalied login!")
}