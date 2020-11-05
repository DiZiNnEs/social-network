const UserDialogDateToMessages = [
  { id: 1, name: 'Shapagat' },
  { id: 2, name: 'Alisher' },
  { id: 3, name: 'Sveta' },
  { id: 4, name: 'Katya' },
  { id: 5, name: 'Dizi' },
  { id: 6, name: 'Dmitry' },
];

const UserMessagesDateToMessages = [
  { id: 1, messages: 'hello' },
  { id: 2, messages: 'How are you ?' },
  { id: 3, messages: 'I\'m good' },
  { id: 4, messages: 'Okay, I get it' },
  { id: 5, messages: 'Okay, I get it' },
  { id: 6, messages: 'Okay, I get it' },
];

const PostCommentsAndLikesToProfile = [
  { post_comment: 'What\'s up bro', post_likes: 15 },
  { post_comment: 'Coroutine is the best', post_likes: 25 }
];

const returnDates = () => {
  return (
    {
      UserDialogDateToMessages: UserDialogDateToMessages,
      UserMessagesDateToMessages: UserMessagesDateToMessages,
      PostCommentsAndLikesToProfile: PostCommentsAndLikesToProfile,
    }
  );
}

export default returnDates;
