# Serverless nodemail sender

## How to use

### Make a lambda function

 Make a node function in lambda call it as you want, 
 - **Runtime**: Nodejs 16.x
 - **Architecture**: x86_64
 - **Handler**: index.handler

 do `npm install`, then
 deploy this repo as zip (otherwise s3) to root of lambda function

### Replace

* Dummy user
* Dummy pass
* Host SMTP 
* Port 
Have in mind if you are using some provider like Gmail, you must able access to app less secure on your account management, otherwise Gmail will be blocking all your emails.
