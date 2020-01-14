# NowTV React Interview

![NowTV](./logo.png)

A simple React + Redux project to retrieve, render and manipulate data returned from an API.

## Commands

- **yarn start**: Runs the web application in developer mode
- **yarn test**: Executes Jest tests that have the `.test.js` extension

## Tasks

Feel free to create new files to help you complete these tasks. Additional dependencies can be installed, if you think they are necessary

`index.js` in src directory is your react entry point, it is connected to the redux store

`data` directory is a mocked-API which exposes methods to get message information and member information from a chat room.

It has two publicly exposed functions `getMessages` and `getMembers`. Your tasks will be to add further logic to display and manipulate the data returned from these functions, without modifying `data/index.js`

Do not modify `data.js` to achieve these tasks, and do not worry about the styling. Code addition should be unit tested.

1. Render the list of messages from the redux store

2. Display the user's email when you hover over the message (using javascript).

3. Display the avatar of the user next to the message

4. Display and format the timestamp of the message to be human readable

5. Sort the messages by time

## Submission

Please upload your solution to your github account as a public repository, and send the URL to us.

## Report

0. Install deps and sanity check

I'm using Windows. Used `npm install` instead of installing yarn.
Installed deps from git bash. App runs, but jest broken as it's trying to glob unix paths.
Reinstalled deps from git cmd, jest runs.
Noticed you used connnected-react-router :)

1. Render the list of messages from the redux store

    1. reducers/messages.js has a bug - it should only set the state to the action payload if the action is MESSAGES_LOADED. It actually sets the state to the payload of the last action dispatched. Add a test & fix. 

    2. Think about rendering messages. Decide to create a message component. Add a components directory. Add message.js. Test message.js exports a function. Add a snapshot test, for now just render stringified props. Add a second snapshot test to home.test.js for a list with one message. Use message.id for the key prop, it's a UUID so this should be safe.

2. Sort the messages by time.

    1. In the absence of additional sorting requirements, the most expedient way  to do this is in the reducer, so implement it there. The timestamps are all UTC in ISO format, so a lexical sort is sufficient here. I'll need a function that compares two objects using one of their properties. Create a utils folder for that, and implement in comparator.js.
