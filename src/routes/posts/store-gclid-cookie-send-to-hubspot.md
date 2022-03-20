---
title: Store GCLID in Cookie and Send to Hubspot
slug: store-gclid-cookie-send-to-hubspot
description: Store parameters like GCLID and UTMs in cookies, and add them to your form submissions, all inside GTM. Welcome to Offline Conversion Tracking utopia.
date: 2017-09-25
---

# {title}

![Digital Marketing Graph](/images/2017/09/digital-marketing-graph-1.jpg)

So, you've got an AdWords campaign running, which means you've got an ad that links to your website. When someone clicks your ad, the URL to the page on your website has a GCLID parameter appended to it:

```
https://yourwebsite.com/your-landing-page/?gclid=blah
```

This works perfectly fine if the user converts **on that page.** You can, through several methods, directly attribute this conversion to your specific ad. Then, if the user uses the same email address when purchasing offline as they did in the form, you can attribute that purchase to your ad as well.

But what if the user navigates elsewhere on the site? Unless you've got some JavaScript appending the GCLID to every link, it will be stripped as soon as the user clicks something.

---

## Enter the Cookie: Offline Conversion Tracking's Best Friend

A better method is to [store the GCLID in a cookie](https://support.google.com/adwords/answer/7012522?hl=en). That way, even if the user completely closes the site and revisits it later by typing in the domain name... The cookie will still exist.

![Hilarious Cookie Monster Comic](/images/2017/09/cookie-monster.jpg)

Since I've been asked to do this at work a few times, I've taken the liberty of creating a utility function. Since it's written in vanilla JavaScript, **it can be added directly to Google Tag Manager.**

This solution can be applied to any tracking parameters you want to pass along with your form submissions anywhere on your site. For example, another use case would be to pass UTM parameters with form submissions that get sent to Salesforce, since Salesforce CRM doesn't have a global tracking code like Hubspot and Google Analytics.

You can also pass along any parameters you want to get more granular insights and reporting on any platform.

## The code

The function is called `assignTrackingParameterToCookie`, and it accepts two arguments. The first is the name of the URL parameter you want to pass along, and the second is the form type. Currently, the only options for form type are `hubspot` and `gform` (Gravity Forms.) However, this script can easily be modified to allow for other form types.

Here is the full code snippet for you to copy and modify:

> If you’d rather do a quick Select All, Copy, and Paste, here’s the [raw code](https://gist.githubusercontent.com/zackphilipps/a63ae55f13b06c1b443e755fa8e8404f/raw/016b1bbbeb4ca2d7325088fea596293129dc3a4b/assignTrackingParameterToCookie.js).

```js
// Pass Tracking Parameters to a Form on Another Page Using GTM
// http://zackphilipps.com/store-gclid-cookie-send-to-hubspot/

/**
 * Assigns the supplied URL parameter to a cookie and each form field with a name that matches.
 * You can keep calling this function multiple times for each URL parameter you want to pass along, e.g.
 *
 * window.onload = function () {
 *   assignTrackingParameterToCookie("gclid", "hubspot");
 *   assignTrackingParameterToCookie("utm_source", "gform");
 *   assignTrackingParameterToCookie("<YOUR_UTM>", "<YOUR_FORM_TYPE>");
 * };
 *
 * @param {string} fieldParam - The name of the URL parameter. In this case, `gclid`.
 *                              Could also be any UTM parameter such as `utm_source`.
 *                              MUST match the input name (HubSpot)
 *                              or one of its CSS classes (Gravity Forms).
 * @param {string} formType - The type of form. Currently only supports 'hubspot' (the default)
 *                            or 'gform'.
 */
function assignTrackingParameterToCookie(fieldParam, formType = 'hubspot') {
  var field = getParam(fieldParam),
    inputs

  if (field) {
    setCookie(fieldParam, field, 365)
  }

  /**
   * Add other form types / input query selectors here.
   */
  if (formType === 'gform') {
    inputs = document.querySelectorAll('.' + fieldParam + ' input[type="text"]')
    assignCookieValueToFormInput(fieldParam, inputs)
  } else if (formType === 'hubspot') {
    inputs = document.querySelectorAll('.hs-input[name="' + fieldParam + '"]')
    assignCookieValueToFormInput(fieldParam, inputs)
  }

  /**
   * Do not edit.
   */
  function assignCookieValueToFormInput(fieldParam, inputs) {
    var field = getCookie(fieldParam),
      length = inputs.length

    if (field && length) {
      for (var i = 0; i < length; i++) {
        inputs[i].value = field
      }
    }
  }

  /**
   * Utility functions. Do not edit.
   */
  function getCookie(name) {
    var value = '; ' + document.cookie
    var parts = value.split('; ' + name + '=')
    if (parts.length == 2) return parts.pop().split(';').shift()
  }
  function setCookie(name, value, days) {
    var date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    var expires = '; expires=' + date.toGMTString()
    document.cookie = name + '=' + value + expires + ';path=/'
  }
  function getParam(p) {
    var match = RegExp('[?&]' + p + '=([^&]*)').exec(window.location.search)
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
  }
}

/**
 * Example usage!
 * `window.onload` is necessary to ensure all form fields have loaded.
 */
window.onload = function () {
  assignTrackingParameterToCookie('gclid', 'hubspot')
  assignTrackingParameterToCookie('utm_source', 'gform')
  assignTrackingParameterToCookie('<YOUR_UTM>', '<YOUR_FORM_TYPE>')
}
```

### Usage with Hubspot

The way this works for Hubspot forms is that you will need to create hidden fields that match your parameter names **exactly.** So if your parameter is `gclid`, you will need a hidden field called `gclid`:

![Hubspot Edit Screen](/images/2017/09/hubspot-edit-screen-1.jpg)

### Usage with Gravity Forms

For Gravity Forms, you need to make a Text field – NOT hidden field – so you can add a class to it. The class must match your parameter name.

![Gravity Forms Screencast](/images/2017/09/gravity-forms-screencast.gif)

---

## Conclusion

I hope you find this useful! It can be used in any number of ways. We're certainly getting a lot of mileage out of it at [Element Three](https://elementthree.com/). Any questions or suggestions, please leave a comment on [this gist.](https://gist.github.com/zackphilipps/a63ae55f13b06c1b443e755fa8e8404f)
