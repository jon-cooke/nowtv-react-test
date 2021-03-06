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

    2. Modify the messages reducer to sort the payload. Use the same comparator function in the test to sort the test data.

3. Display and format the timstamp of the message to be human readable.

    1. First, change the Message component to render markup instead of JSON. Update snapshot.

    2. I chose to do this expediently with vanilla JS and convert the ISO string to a human readable date string using toLocaleString. Update the snapshot. This satisfies the requirements, but there are a few loose ends here worth talking about.

4. Display the avatar of the user next to the message

    1. Think about how to fetch and join the data. There are a few options here. Idiomatic redux would be to create a seperate state for members and use a selector (with memoization) to join to messages. With limited time, I decide instead to modify loadMessages to additionally fetch members and add a reference to each message pointing at the correct member. This avoids dealing with races in the Home container. Realise that the Home component triggering the loading of messages is not tested! Realise also that loadMessages is not tested either! Proceed anyway, due to limited time. This seems like something that should be implemented server side with GraphQL or similar. Commited without tests, time is limited.

    2. Now each message has a reference to the user that created it, modify the Message component to show the avatar. Use the users name as the img alt text. Add dimension attributes as a member might not have an avatar, or it might fail to load. Update snapshot. I could refactor to make the avatar image reusable, but the is no requirement for that yet, so leave it in place. I'm aware that the tests here are a little thin - for instance it would be a good idea to check the message text was in the DOM, check the avatar alt had the right value etc. Snapshots are good for regression, but don't convey any information about why things have been implemented. Limited time again.

5. Display the users email when you hover over the message (using Javascript)

    1. It's been a while since i did anything involving hover with Javascript, it being a mobile first world these days. I know I'll need a mouseOver handler, which means I'll need to test it. I've not tested a mouseOver with Enzyme before, check the docs, it looks straightforward. Decide to spike first, implementing with hooks. Quickly realise I need to update React to use them. Dither for a bit. Decide to update and see if the spike flies or burns, but resolve to step back and refactor to a class component if it doesn't fly quickly. Update React and ReactDom to ^16.8.0 and am pleased to see the spike works. The enzyme shallow render can't handle hooks, so I change the snapshot to use mount as the result is equivilant anyway. All tests pass. 

    2. Time to tests the behaviour. Add a test to verify the email is not rendered by default, then modify the component to do that to verify it fails. Next, add a test that renders and simulates a mouseover and checks the email is renders. Unable to make this pass against the spike. Enzyme is not updating the tree. Break for a while. Figure out that tree.debug shows out of date nodes, but tree.text for some reason works. Finally able to test, although not entirely happy as the tests here feel like they are brittle. Decide to check with some console.log that the final test really does fire the event handlers. It does :). Tidy up the mess and make the final code commit.

## Afterthoughts

I should perhaps have considered the React version before starting, I could have saved time by using class+state instead of hooks.

I think Enzyme now creates more problems than it solves, and I'd have avoided if it wasn't already being used.

The update to React 16.8.0 broke placeholder image dimensions and rendered visible alt text.
