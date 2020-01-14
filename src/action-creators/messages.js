import { getMessages, getMembers } from '../data';
import { MESSAGES_LOADED } from './action-types';

export const loadMessages = () => dispatch =>
  getMessages().then(messages =>
    getMembers().then(members => {
      //create a mapping of memberId to member
      const membersById = members.reduce(
        (mapping, member) =>
          Object.defineProperty(mapping, member.id, {
            value: member,
          }),
        {}
      );
      // add a user property to the message
      messages.forEach(message => (message.user = membersById[message.userId]));
      return dispatch({
        type: MESSAGES_LOADED,
        payload: messages,
      });
    })
  );
