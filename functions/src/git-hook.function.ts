import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();
const db = admin.firestore();

const exTable = [
  20,
  40,
  100,
  250,
  500,
  1000,
  1500,
  4000,
  10000
];

export const gitHook = functions.https.onRequest(async (request, response) => {
  const pets = await db.collection('pets')
    .where('ownerGithubId', '==', request.body.sender.id)
    .get();

  const pet = pets.docs[0].data();

  let level = 1;
  exTable.some(nextExp => {
    if (pet.exp + 10 >= nextExp) {
      level++;
      return false;
    } else {
      return true;
    }
  });

  const increement = admin.firestore.FieldValue.increment(10);

  pets.docs.forEach(doc => doc.ref.update({
    exp: increement,
    level
  }));
  response.send('Success');
});
