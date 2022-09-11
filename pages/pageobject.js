import{Selector,t} from 'testcafe';
class Page{
constructor(){
    this.email=Selector("#Email");
    this.password=Selector("#Password");
    this.submit=Selector("button[type='submit']");
}
async information(theemail,thepassword){
    await t
    .click(this.email)
    .pressKey("ctrl+a delete")
    .typeText(this.email,theemail)
    .click(this.password)
    .pressKey("ctrl+a delete")

    .typeText(this.password,thepassword)
    .click(this.submit)
}




}export default new Page();