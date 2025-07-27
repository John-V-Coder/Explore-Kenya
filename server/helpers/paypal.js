const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AcrVMYyomuoPbxZbWWS1-6vTNArllDwUyOvdLPcR3B4Jc-faES7tLAZMAufmMNA0NPVr61AVQmRnxuzI",
  client_secret: "EH7xacx-Rb2wPSUgwiBvKSzoxxqaK4NUDa5y24kmKguV3CqXL_Oq6OzKXT6oWclHwm1EAXleewvZN180",
});

module.exports = paypal;
