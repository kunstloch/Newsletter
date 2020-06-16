# Newsletter
Using Mailchimp API for Newsletter-Signup


## Starting



### clone from github:


`$ git clone https://github.com/kunstloch/newsletter.git`


### create Mailchimp account


Find more information here: 
[Get Started with the Mailchimp API](https://mailchimp.com/developer/)


### install:


`$ cd newsletter`

`$ yarn add`  or  `$ npm install`


### add your Mailchimp authorisation credentials


Create `.env` file.

You need your to add _**unique id**_ for audience `LIST_ID`(find at: Audience -> Settings) in the `.env` file.

Add also your _**API key**_ (find at: Account ->  Extras -> API keys). Use in your `.env` file as `API_KEY`

In your _**API key**_ you can find the e.g. _**US8**_ `US_SERVER` information. It is the last part after the hypen. It looks like this: `US` and a number from 1 to 20. 


Use it also in your `.env` file. 


Additionally you need a _**user**_ `USER` in your `.env` file. This can be any string you want to use.


So your `.env` file should look like this:

```
API_KEY=13ab63i813ee14433geacc73748aae5a-us9
LIST_ID=aee123g1ee
USER=yourusername
US_SERVER=US9
```

*It is very important, that you never share your `.env` files on Git. 
So add `.env` files in your `.gitignore` file. (I faked all the numbers in this case)*


### run


`$ nodemon app.js`


### browser


Newsletter signup can be find at [localhost:3000/](http://localhost:3000/) in your browser. 

