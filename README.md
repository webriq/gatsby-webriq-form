# @webriq/gatsby-webriq-form

`@webriq/gatsby-webriq-form` exports a React Component to make WebriQ Forms work with Gatsby sites.

## Install

`npm install @webriq/gatsby-webriq-form`

## How to use

This is what a component using `@webriq/gatsby-webriq-form` looks like:

```javascript
import React from 'react'

import WebriQForm from '@webriq/gatsby-webriq-form'

const MyComponent = () => (
  <WebriQForm
    name={FORM_NAME}
    id={HTML_ID}
    className={HTML_CLASSES}
    data-form-id={FORM_ID}
    data-thankyou-url={URL_TO_REDIRECT_AFTER_SUBMISSION}
  >
    <input type="text" name="name" />
    <textarea name="message"></textarea>
    <input type="submit" value="Send Message" />
  </WebriQForm>
)

export default MyComponent
```

where:

- Prop `data-form-id` is REQUIRED. You can use `formId` instead of `data-form-id` if you like it better.
  So it goes like:

  ```javascript
    <WebriQForm formId={FORM_ID}>
      ...
    </WebriQForm>
  ```

- Prop `redirectUrl` is an alias of `data-thankyou-url`
  So it goes like:

  ```javascript
    <WebriQForm redirectUrl={URL_TO_REDIRECT_AFTER_SUBMISSION}>
      ...
    </WebriQForm>
  ```

- Props `name`, `id`, `className`, `data-thankyou-url` are optional
- Prop `name` is for form name, `id` is the form id attribute, and `className` for css classes.

## Example used in Newsletter

```javascript
import React from 'react'

import WebriQForm from '@webriq/gatsby-webriq-form'

class IndexPage extends React.Component {
  render() {
    return (
      <WebriQForm
        method="POST"
        data-form-id="5bcd42f86b63453b251972bc"
        name="Newsletter Form"
        className="form-newsletter"
      >
        <div className="form-row">
          <div className="col-12 mb-3">
            <div className="form-group">
              <label htmlFor="email_address">
                Enter Your Email Address
              </label>
              <input
                className="form-control"
                type="email"
                name="Email Address"
                id="email_address"
                placeholder="info@yourmail.com"
              />
              <small className="text-dark form-text mt-2">
                We will never share your email with anyone else.
              </small>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <div className="webriq-recaptcha" />
            </div>
          </div>

          <div className="col-12">
            <div className="form-group">
              <button
                className="btn btn-primary hvr-shadow"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </WebriQForm>
    )
  }
}
```

## Intended Use

This is used specifically for [WebriQ Forms](https://forms.webriq.com) which is by default integrated in [WebriQ App](https://app.webriq.com).

## Bugs / Issues / Suggestions

Please file a new issue at Issues tab. Thank you! :)


