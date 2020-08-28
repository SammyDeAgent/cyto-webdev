/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// TODO 3.8 - push a message using the web push library
const webPush = require('web-push');

//Firefox
// const pushSubscription = {"endpoint":"https://updates.push.services.mozilla.com/wpush/v1/gAAAAABfSLY_XQNGYrm4DRVSABHz3v7enQqmQUfWW993rzcxcs21pgzYlNKBj5srT0Y1w8BqMN8SpobJoctVATojSRy93OXnvttwLQEL3VdzJtWmHAQ1Xs9nitxyhA8dwRCEwjsi_csa","keys":{"auth":"sg7s5LzdyP32z9w43D8gYA","p256dh":"BHzKdCcVMGzrkZkbmjqqqN41j3RROKFu7y84B_EUkY6zxFJtb_6JhDmba5_jQ5ffTY8GonXZSUEyK0P7ZW4Sf4k"}};

//Google Chrome
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/ckklYjBbl0U:APA91bEvMXRk5jjL7GMHD8t3gT-Ql4DAMu5nFyVsY1cv3NQDZSVYmst6KwBRMEJTo1-1id4ZebH1ZojieZcjMG0rcl9EaE3mzFT8kN0w9SPreAMizcSKHRsuvzwT8P9oixRPfbmIIBWf","expirationTime":null,"keys":{"p256dh":"BMvigbTmG_5Pi0zF7pmjnTAFanmVuCJQ3P1p657UE6a6DaIslMM8U_fNURd8UrcTt__-Nf_3V1upeQMVEY6FMJI","auth":"-_f5loFq5nmBTUjoZcMyzA"}};



// TODO 4.3a - include VAPID keys
const vapidPublicKey = 'BFHnkBGnzONWp2n8GjArRt8ezQ2m00mcoit2A2gZKlMqu6BTspwJHyIDm5SLami4pEHOAf2l6YNNoZRAgGVNCqI';
const vapidPrivateKey = 'rkzElqUv6snQU3J6kFl5zmXZk8rX0CDivMwT43zYoxY';


const payload = 'Here is a payload!';

const options = {
    //No longer needed when have a VAPID key pair
//   gcmAPIKey: 'AAAAjMz35x8:APA91bG3e2W31JO7q5s2aCa3wyrB_uLIVxxRQf3ajMcvTu6wiF2CHcONfhK2sI6ASRpdykHhz3gspyuuQElTlHt6yvFtPWjDS-IbilKG2nNJd5gihBlogOBbm1ICP6chmej5ob0NnPrN',
  TTL: 60,

  // TODO 4.3b - add VAPID details
  vapidDetails: {
    subject: 'mailto: rimamotostheking@gmail.com',
    publicKey: vapidPublicKey,
    privateKey: vapidPrivateKey
  }
  
};

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);
