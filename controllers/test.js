const { firebaseAuth } = require('../firebase');

const test = async (req, res, next) => {
  const auth = firebaseAuth.getAuth();
  const { token } = req.body;
  auth
    .verifyIdToken(token)
    .then((decode) => {
      res.status(200).send(decode);
    })
    .catch((e) => {
      return res.status(400).send(e);
    });
  //res.status(200).send();
};

module.exports = {
  test,
};
