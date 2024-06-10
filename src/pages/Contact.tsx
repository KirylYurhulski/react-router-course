import { useRef, useState } from 'react'
import { InputWithValidation } from '../components/ui/Contacts/InputWithValidation'
import { TextareaWithValidation } from '../components/ui/Contacts/TextareaWithValidation'
import { Toast } from 'react-bootstrap'

export const Contact = () => {
  const contactForm = useRef<HTMLFormElement>(null)
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [showPopup, setShowPopup] = useState<boolean>(false)

  function sendMessage(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault()
    setName('')
    setEmail('')
    setMessage('')
    setShowPopup(true)
  }

  return (
    <>
      <form ref={contactForm} className="was-validated">
        <InputWithValidation
          id="name"
          title="Name:"
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
          errorMessage="Please enter a name."
        />
        <InputWithValidation
          id="email"
          title="Email:"
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value.trim())}
          errorMessage="Please enter a valid email."
        />
        <TextareaWithValidation
          id="message"
          title="Message:"
          value={message}
          onChange={event => setMessage(event.target.value.trim())}
          errorMessage="Please enter a message in the textarea."
        />
        <div className="mb-3">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={!contactForm.current?.checkValidity()}
            onClick={event => sendMessage(event)}
          >
            Send
          </button>
        </div>
      </form>

      <Toast show={showPopup} onClose={() => setShowPopup(false)}>
        <Toast.Header>
          <strong className="me-auto">Confirmation of the operation</strong>
        </Toast.Header>
        <Toast.Body>The message has been sent successfully!</Toast.Body>
      </Toast>
    </>
  )
}
