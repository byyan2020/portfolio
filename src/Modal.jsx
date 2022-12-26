import { useRef, useId, useState } from "react";
import "./Modal.css";

function Modal() {
	const modalRef = useRef(null);
	const id = useId();
	const [email, setEmail] = useState("");
	const [emailValidate, setEmailValidate] = useState(false);
	const [confirmEmail, setConfirmEmail] = useState("");
	const [confirmEmailValidate, setConfirmEmailValidate] = useState(false);
    const [submitted, setSubmitted] = useState(false);

	const formValidation = (event) => {
		event.preventDefault();
        setSubmitted(true);
        const emailRe = /\S+@\S+\.\S+/;
		if (emailRe.test(email)) {
			setEmailValidate(true);
		} else {
			setEmailValidate(false);
		}
		if (confirmEmail === email) {
			setConfirmEmailValidate(true);
		} else {
			setConfirmEmailValidate(false);
		}
	};

	const onCancel = () => {
		modalRef.current.close();
		setEmail("");
		setConfirmEmail("");
		setConfirmEmailValidate(false);
		setEmailValidate(false);
        setSubmitted(false);
	};

	return (
		<>
			<dialog className="modal" ref={modalRef}>
				{emailValidate && confirmEmailValidate ? (
					<p className="submit-success">Subscribe Success!</p>
				) : (
					<form
						action="/subscribe"
						method="post"
						class="subscribe-form"
						onSubmit={(e) => formValidation(e)}
					>
						<h2>Subscripe to see my updates!</h2>
						<div className="input-group">
							<label htmlFor={`${id}-email`} className="form-label">
								Email:{" "}
							</label>
							<i className="input-require">*required</i>
							<input
								className="form-input"
								id={`${id}-email`}
								type="text"
                                value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							{(!emailValidate && submitted) && <p className="email-alert form-alert">Invalid Email Address</p>}
						</div>
						<div className="input-group">
							<label className="form-label" htmlFor={`${id}-confirm-email`}>
								Confirm Email:{" "}
							</label>
							<i className="input-require">*required</i>
							<input
								className="form-input"
								id={`${id}-confirm-email`}
								type="text"
                                value={confirmEmail}
								onChange={(e) => setConfirmEmail(e.target.value)}
							/>
							{(!confirmEmailValidate && submitted) && (
								<p className="confirm-alert form-alert">Confirm Email not match</p>
							)}
						</div>
						<button className="submit-btn" type="submit">
							Subscribe
						</button>
					</form>
				)}

				<button className="modal-cancel" onClick={onCancel}>
					Cancel
				</button>
                
			</dialog>

			<button className="modal-open" onClick={() => modalRef.current.showModal()}>
				Subscripe to see my updates!
			</button>
		</>
	);
}

export default Modal;
