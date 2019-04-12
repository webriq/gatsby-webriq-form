import React from 'react'

class WebriQForm extends React.Component {
  constructor(props) {
    super(props)
    this.loadWebriQFormScript = this.loadWebriQFormScript.bind(this)
  }

  componentDidMount() {
    if (window && !window.isWebriQFormLoaded) {
      this.loadWebriQFormScript()
    }

    if (window && window.isWebriQFormLoaded) {
      window.webriqFormRefresh()
    }
  }

  loadWebriQFormScript() {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.id = 'webriqform'
    script.src =
      this.props.scriptSrc || 'https://forms.webriq.com/js/initReactForms'
    document.body.appendChild(script)
    const headScript = document.getElementsByTagName('script')[0]
    headScript.parentNode.insertBefore(script, headScript)
  }

  render() {
    const { id, name, className } = this.props
    const formId = this.props.formId || this.props['data-form-id']
    let redirectURL =
      this.props.redirectUrl || this.props['data-thankyou-url'] || '/thank-you'

    return (
      <form
        name={name}
        id={id}
        className={className}
        method="POST"
        data-form-id={formId}
        data-thankyou-url={redirectURL}
        webriq="true"
      >
        {this.props.children}
      </form>
    )
  }
}

export default WebriQForm
