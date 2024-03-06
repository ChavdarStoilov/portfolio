import { useState } from "react";
import { LoadingOverlay,Box } from "@mantine/core";
import { notifications } from '@mantine/notifications';
import * as EmailValidator from 'email-validator';
import * as api from '../api/api.v1'

export default function Contacts() {
    const [visible, setVisible] = useState(false);

    const formSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));

        if (EmailValidator.validate(data.email)) {
            setVisible(true)

            api.sent_email(data)
            .then((result) => {
                if (result.status === 200) {
                    notifications.show({
                        title: 'Notification',
                        message: 'The email was sent successfully.',
                        autoClose: 4000,
                        color: 'green',
                    })
                    e.target.reset()
                    setVisible(false)

                }
                else {
                    notifications.show({
                        title: 'Notification',
                        message: 'The email was sent successfully.',
                        autoClose: 4000,
                        color: 'red',

                    })
                }
            })
            .catch((error) => console.log(error))
        }
        else {
            notifications.show({
                title: 'Notification',
                message: 'Enter valid email address!',
                autoClose: 4000,
                color: 'red',

            })
            setVisible(false)

        }

    };


    return (
        <div id="fh5co-consult">
            <div className="choose animate-box">
                <h2>Contact</h2>

                <form onSubmit={formSubmit}>
                    <Box pos="relative">
                        <LoadingOverlay
                            visible={visible}
                            zIndex={1000}
                            overlayProps={{ radius: "sm", blur: 2 }}
                        />
                        <div className="row form-group">
                            <div className="col-md-12">
                                <input
                                    name="fname"
                                    type="text"
                                    id="fname"
                                    className="form-control"
                                    placeholder="Your firstname"
                                    required
                                />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-md-12">
                                <input
                                    name="lname"
                                    type="text"
                                    id="lname"
                                    className="form-control"
                                    placeholder="Your lastname"
                                    
                                />
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-md-12">
                                <input
                                    name="email"
                                    type="text"
                                    id="email"
                                    className="form-control"
                                    placeholder="Your email address"
                                    required

                                />
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-md-12">
                                <input
                                    name="subject"
                                    type="text"
                                    id="subject"
                                    className="form-control"
                                    placeholder="Your subject of this message"
                                    required

                                />
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-md-12">
                                <textarea
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="10"
                                    className="form-control"
                                    placeholder="Say something about us"
                                    required

                                ></textarea>
                            </div>
                        </div>

                        <div className="form-group">
                            <button
                                className="btn btn-primary"
                            >
                                Send Message
                            </button>
                        </div>
                    </Box>
                </form>
            </div>
        </div>
    );
}
