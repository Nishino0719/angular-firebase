import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const gitHook = functions.https.onRequest((request, response) => {
  console.log(request.body);
  response.send('Success');
});
