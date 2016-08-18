# Frontend Developer Test

## Introduction

The intention of the exercise is to test your ability to resolve a complex problem we could find in the real world. Using your favorite technology stack, create a web application that:

- Provides the user with a form to fill in their AWS security credentials
- Launches a Wordpress AMI using AWS Elastic Compute Cloud (EC2) service, when the user presses submit
- Displays the progress or state of the server to the user on the browser with messages such as Booting server, Server up...
- Displays a clickable link to access the WordPress application and a button to stop the machine, when the server is available.

Working this exercise out is not a requirement to proceed to the next phase of the selection process, but it can help to defend your application to the position. If you decide to do it, but do not have time to complete it that is ok too. But please, be done before a week from now. When you are done, please send us an email with instructions to access the code and deploy the application.

We will schedule an interview to review your solution. As preparation for it, we also recommend that you think about what would take to deliver this app to production (security, scalability, customization options, etc.). We do not expect what you deliver to be ready for production: we just want to have a conversation about it and get the feeling of what it would be like to work with you.

## Requisites
- It has to be a [single page application](https://en.wikipedia.org/wiki/Single-page_application)
- You can use any Javascript Framework available even though we would prefer that you used AngularJS for the Frontend
- Please use the AWS Javascript SDK. You can find more information about it [here](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/browser-intro.html)

## Hints and Recommendations
- You are free to use the empty Yeoman skeleton in this repository, but it is not a must.
- Focus on just one single WordPress AMI for a t2.micro instance type on a single region.
- We do not expect the application to manage persistence of information about running machines or credentials, but that is one of the items we could explore on the interview
- AWS provides new accounts with 750 hours per month of t2.micro instances during the first year for free as part of their [free tier](https://aws.amazon.com/free/?nc1=h_ls): you can use those to test your solution.
- If you have extra time and really want to impress us, you can write some tests as a bonus
