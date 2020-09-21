# Next.js authentication with AWS

> This code goes along with my tutorial [The complete Guide to Authentication with Next.js and AWS](https://dev.to/dabit3/the-complete-guide-to-next-js-authentication-2aco)

![](header.jpg)

This project contains an end to end solution for Next.js authentication on AWS with AWS Amplify.

1. Client authentication
2. Accessing the user session on the client
3. Protected client routes
4. Client-side redirects
5. Accessing the user session in a server-side route (getServerSideProps)
6. Protected server routes (getServerSideProps)
7. Server-side redirects (getServerSideProps)
8. Accessing the user session in an API route
9. Deploying the app using the Next.js Serverless Component

### To deploy the authentication service and run the app, follow these steps:

1. Clone the repo

```sh
git clone https://github.com/dabit3/next.js-authentication-aws.git
```

2. Change into the directory and install the dependencies

```sh
cd next.js-authentication-aws

npm install
```

3. Initialize the Amplify project

```sh
amplify init
```

4. Deploy the authentication service

```sh
amplify push --y
```

5. Run the app locally

```sh
npm run dev
```

## Deploying with Serverless Framework

```sh
npx serverless
```