# fibonacci

Examples: the first values of the Fibonacci sequence are 0, 1, 1, 2, 3, 5, 8, 13, ..., so, if we were to give the API the index n=3, we should get the response value "2", and if we request n=6, we should get "8" as the response, and so on.

install
Clone the repository and install dependencies

## install dependencies
```
npm install
```

### Run
```
npm start
```

### Example:

In Postman, create a new request.
Set the base URL to http://localhost:3000.
Choose the HTTP method "GET".
In the URL field, append the endpoint path /6 after the base URL.
Click "Send".
If your service is running correctly, you should see a JSON response in the "Response" tab, similar to:

JSON

```
{
  "fibonacci": 8
}

```