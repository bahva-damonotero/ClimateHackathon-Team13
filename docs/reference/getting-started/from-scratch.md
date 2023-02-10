# Creating a New Project

## Prerequisites

Things you will need:

- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/) (installed with Node)
- GitHub Personal Access Token
- Code editor or IDE

Technologies you should be familiar with:

- [React](https://reactjs.org/)

Please read the information about `.npmrc` files found xref:overview::npmrc.adoc[here] before proceeding.

## Instructions

### Step 1: Install [Yeoman](https://yeoman.io/)

Run the following command to install Yeoman globally:

```terminal
npm install -g yo
```

NOTE: You may need to prefix the above command with `sudo` to get it to work, but you should try without it first.

### Step 2: Clone the React Scaffold Repo

Clone the [sample-scaffold-react](https://github.boozallencsn.com/uip/sample-scaffold-react) repo using Git:

```terminal
git clone git@github.boozallencsn.com:uip/sample-scaffold-react.git
```

### Step 3: Install the Generator

From **inside the scaffold repo's root directory**, run the following commands:

```terminal
npm ci
npm link
```

### Step 4: Run the Generator

From any directory **outside of the scaffold repo's directory**, run:

```terminal
yo ui-react
```

Follow the instructions in the terminal.

### Troubleshooting

* If you receive a **404** error from NPM when running the generator, double check that your PAT is valid and has the correct permissions, then re-run the generator.

* If you encounter an `UNABLE_TO_GET_ISSUER_CERT_LOCALLY` error, run the following command (before re-running the generator):

```terminal
npm set strict-ssl false
```

## IDE Configuration

For `.editorconfig` to have an effect, check if your IDE requires a plugin/extension.

A list of IDEs that do not require a plugin can be found [here](https://editorconfig.org/#pre-installed).

A list of IDEs that require a plugin can be found [here](https://editorconfig.org/#download).

## Integration with Prettier

To enable Prettier, `.eslintrc.js` will need to be modified. The `prettier/prettier` rule has been added and is turned off by default. To turn on Prettier, change `"prettier/prettier": "off"` to `"prettier/prettier": "warn"` in the rules object.

## Proxying API Requests in Development

People often serve the front-end React app from the same host and port as their backend implementation.

- To tell the development server to proxy any unknown requests to your API server in development, add a proxy field to your `package.json`, for example: `"proxy"`: `"http://localhost:8080/"`.
- This way, when you fetch `('/api/todos')` in development, the development server will recognize that it’s not a static asset, and will proxy your request to `http://localhost:8080/api/todos` as a fallback. The development server will only attempt to send requests without text/html in its Accept header to the proxy.
- The Proxy option supports HTTP, HTTPS, and WebSocket connections.
- If the Proxy option is not flexible enough for you, alternatively you can: [Configure the Proxy Manually](https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually)
- This is how we chose to do it (see `src/setupProxy.js`) at `"port"`: `8080`, because it allows us more flexibility.
- Otherwise, we could have enabled CORS on our server [via Express](https://enable-cors.org/server_expressjs.html).
- Lastly, we could have used [environment variables](https://create-react-app.dev/docs/adding-custom-environment-variables) to inject the right server host and port into your app.

## Deploying Using Docker

The sample Dockerfile uses Nginx server to run the application. Provided is the most basic configuration needed to build docker image.

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop) installed
- Project created using `yo uip-react`
- Connected to F5 VPN

### Setup

1. Ensure Docker is running and you are connected to the VPN
2. Build the container in the root directory of the generated project (the app you created using `yo uip-react`, not the root directory of the scaffold repo)
```terminal
npm run docker-build
```
  - Update `docker/build-docker` and `docker/serve-docker` with your `appName` and `authToken` where `appName` is the desired name of your image and `authToken` is the token generated from Nexus.
3. Run the container:
```terminal
npm run docker-serve
```

4. View the running app:
```terminal
open http://localhost:8888/
```
