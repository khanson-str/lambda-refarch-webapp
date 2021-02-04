// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "lk265fjju4m26m9knkj9rocds",     // CognitoClientID
  "api_base_url": "https://r0owgbzqjg.execute-api.us-east-1.amazonaws.com/dev",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-str-sample-app.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d2ikheehz19x9w.amplifyapp.com"                                      // AmplifyURL
};

export default config;
