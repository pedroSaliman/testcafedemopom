import Page from "../pages/pageobject";
import {ClientFunction } from 'testcafe';
const url="https://admin-demo.nopcommerce.com/admin/";
const geturl=ClientFunction (()=>window.location.href);



fixture`Getting Started`
    .page`https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F`;


    test('My first test', async t => {
        
          
           Page.information("admin@yourstore.com","admin"); 
           await t
           .expect(geturl()).eql(url);
           
       
    });
   