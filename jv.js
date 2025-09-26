let username=prompt("Enter your name")
let password=prompt("Enter your password")
if(username=="library" && password=="book123")
{
    let borrow=confirm("do you want to borrow a book?")
    if(borrow)
    {
        let category=prompt("select your type of book:\nfiction\n science\n history")
        switch(category)
        {
            case"fiction":
            alert("you selected fiction")
            break;
            case"science":
            alert("you selected science")
            break;
            default:
                alert("invalid category")
        }
    }
}