# React 1 - Development Log

Host React app an AWS S3

according [How to host a React Application on AWS S3](https://www.youtube.com/watch?v=BZcSUInHBfc)

## Implement a React app

Create the app with create-react-app
    npx create-react-app react1 --template typescript

Strip the app.

Implement the app as desired.

## Grant Access Rights on the S3 Bucket

Unblock Access

Create/Edit Bucket-Policy:

    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "AllowPublicReadAccess",
                "Effect": "Allow",
                "Principal": "*",
                "Action": "S3:getObject",
                "Resource": "arn:aws:s3:::fr.m-service.react1/*"
            }
        ]
    }

## Deploy to AWS S3

Add script to package.json (obviously only once):

    "deploy": "aws s3 sync build s3://fr.m-service.react1",

Build and deploy with:

    npm run build
    npm run deploy