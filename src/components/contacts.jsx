import { useDisclosure } from "@mantine/hooks";
import { LoadingOverlay, Button, Group, Box } from "@mantine/core";

export default function Contacts() {
    const [visible, { toggle }] = useDisclosure(false);

    const formSubmit = (e) => {
        e.preventDefault();

        setTimeout(() => {
            toggle(false)
        }, 2000)
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
                                    type="text"
                                    id="fname"
                                    className="form-control"
                                    placeholder="Your firstname"
                                />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-md-12">
                                <input
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
                                    type="text"
                                    id="email"
                                    className="form-control"
                                    placeholder="Your email address"
                                />
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-md-12">
                                <input
                                    type="text"
                                    id="subject"
                                    className="form-control"
                                    placeholder="Your subject of this message"
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
                                ></textarea>
                            </div>
                        </div>

                        <div className="form-group">
                            <button
                                className="btn btn-primary"
                                onClick={toggle}
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
