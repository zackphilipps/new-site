---
title: Store GCLID in Cookie and Send to Hubspot
slug: store-gclid-cookie-send-to-hubspot
description: Store parameters like GCLID and UTMs in cookies, and add them to your form submissions, all inside GTM. Welcome to Offline Conversion Tracking utopia.
---

# {title}

![Digital Marketing Graph](/images/2017/09/digital-marketing-graph-1.jpg)

So, you've got an AdWords campaign running, which means you've got an ad that links to your website. When someone clicks your ad, the URL to the page on your website has a GCLID parameter appended to it:

```
http://yourwebsite.com/your-landing-page/?gclid=blah
```

This works perfectly fine if the user converts **on that page.** You can, through several methods, directly attribute this conversion to your specific ad. Then, if the user uses the same email address when purchasing offline as they did in the form, you can attribute that purchase to your ad as well.

But what if the user navigates elsewhere on the site? Unless you've got some JavaScript appending the GCLID to every link, it will be stripped as soon as the user clicks something.

---

## Enter The Cookie: Offline Conversion Tracking's Best Friend

A better method is [store the GCLID in a cookie](https://support.google.com/adwords/answer/7012522?hl=en). That way, even if the user completely closes the site and revisits it later by typing in the domain name... The cookie will still exist.

![Hilarious Cookie Monster Comic](/images/2017/09/cookie-monster.jpg)

Since I've been asked to do this at work a few times, I've taken the liberty of creating a utility function – with a few dependencies. Since it's written in vanilla JavaScript, **it can be added directly to Google Tag Manager.**

This solution can be applied to any tracking parameters you want to pass along with your form submissions anywhere on your site. For example, another use case would be to pass UTM parameters with form submissions that get sent to Salesforce, since Salesforce CRM doesn't have a global tracking code like Hubspot and Google Analytics.

You can also pass along any parameters you want to get more granular insights and reporting on any platform.

### Dependencies

#### Get Cookie

```js
function getCookie(name) {
  var value = '; ' + document.cookie
  var parts = value.split('; ' + name + '=')
  if (parts.length == 2) return parts.pop().split(';').shift()
}
```

Retrieves a cookie value based on its name. **Usage:** `getCookie('gclid');`

#### Set Cookie

```js
function setCookie(name, value, days) {
  var date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  var expires = '; expires=' + date.toGMTString()
  document.cookie = name + '=' + value + expires + ';path=/'
}
```

Creates or saves a cookie. Name it, set the value, and set the number of days it will exist. **Usage:** `setCookie('gclid', 'blah', 365);`

#### Get Parameter

```js
function getParam(p) {
  var match = RegExp('[?&]' + p + '=([^&]*)').exec(window.location.search)
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
}
```

Gets the value of a URL parameter by name. **Usage:** `getParam('gclid');`

### All Together Now

This is the part you copy and paste. However, **keep reading the rest of this post,** because this code block won't do anything on its own. It just defines functions; it's on you to use them to suit your needs.

<!-- <script src="https://gist.github.com/zackphilipps/a63ae55f13b06c1b443e755fa8e8404f.js"></script> -->

**Usage:** `assignTrackingParameterToCookie('gclid', 'hubspot');`

**Make sure to wrap this in a** `window.onload`, and simply repeat for each parameter you want to save. **Example:**

```js
window.onload = function () {
  assignTrackingParameterToCookie('gclid', 'hubspot')
  assignTrackingParameterToCookie('utm_source', 'gform')
  assignTrackingParameterToCookie('utm_medium', 'gform')
  assignTrackingParameterToCookie('utm_campaign', 'gform')
}
```

Currently, the only option for the 2nd argument (`formType`) besides `hubspot` is `gform`, which is Gravity Form. However, this script can easily be modified to allow for other form types.

#### Hubspot

The way this works for Hubspot forms is that you will need to create hidden fields that match your parameter names **exactly.** So if your parameter is `gclid`, you will need a hidden field called `gclid`:

![Hubspot Edit Screen](/images/2017/09/hubspot-edit-screen-1.jpg)

#### Gravity Forms

For Gravity Forms, you need to make a Text field – NOT hidden field – so you can add a class to it. The class must match your parameter name.

![Gravity Forms Screencast](/images/2017/09/gravity-forms-screencast.gif)

---

### Conclusion

I hope you find this useful! It can be used in any number of ways. We're certainly getting a lot of mileage out of it at [Element Three](https://elementthree.com/). Any questions or suggestions, please let me know in the comments section below.
