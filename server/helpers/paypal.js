const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AVpFWBvZezpM7CZ4gq52Ei9Th4tb9X9Sbv6qYezLLdhjrFKCmgPc1EpIpldUcBjBCMzD_JYZfb0gCpyn",
  client_secret: "EAx4oCC8qYNzAcVq4qeb4pLkadjC2msMvFr8ZEeNDjmIYEPqaOPUwBxZrjx6gd70USt5ZByhZ1H-Viq8",
});

module.exports = paypal;
