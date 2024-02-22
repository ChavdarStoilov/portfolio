import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import {
    Loader,
    Button,
    Pagination,
    List,
    Modal,
    Tabs,
    ThemeIcon,
    rem,
    NavLink,
} from "@mantine/core";
import {} from "@mantine/core";
import {
    IconCubeSend,
    IconPhoto,
    IconCircleCheck,
    IconBrandGithub,
} from "@tabler/icons-react";

export default function Projects() {
    const [opened, { open, close }] = useDisclosure(false);
    const [projectData, setProjectData] = useState(false);
    const [loading, setLoading] = useState(false);
    const iconStyle = { width: rem(52), height: rem(52) };
    const [activePage, setPage] = useState(1);

    const loadinghander = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    const projects = {
        1: {
            name: "Car internal system",
            pictures: [
                "/img/car-internal-system/login.png",
                "/img/car-internal-system/dashboard.png",
                "/img/car-internal-system/Oueue.png",
                "/img/car-internal-system/car_managment.png",
                "/img/car-internal-system/screenshots.png",
            ],
            functionality: [
                "User authorization",
                "Customer management",
                "Car management",
                "Google calendar integration",
                "Viber integration",
                "Invoice functionality",
                "History functionality",
            ],
            source: "https://github.com/",
        },
        2: {
            name: "React shop site",
            pictures: [],
            functionality: [
                "User authorization",
                "Cart functionality",
                "Products functionality",
            ],
            source: "",
        },
        3: {
            name: "Rewritten network education site",
            pictures: [],
            functionality: [
                "User authorization",
                "Course management",
                "Enroll to courses functionality",
                "Certificate functionality",
            ],
            source: null,
        },
    };

    const modalHandler = (numProject) => {
        open();
        loadinghander();
        setProjectData(projects[numProject]);
    };

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                withCloseButton={false}
                size="55%"
            >
                {loading ? (
                    <Loader color="blue" />
                ) : (
                    
                    projectData &&
                        <>
                        <h3>{projectData.name}</h3>
                        <Tabs defaultValue="functionalities" variant="outline">
                            <Tabs.List>
                                <Tabs.Tab
                                    value="functionalities"
                                    leftSection={
                                        <IconCubeSend style={iconStyle} />
                                    }
                                >
                                    Functionalities
                                </Tabs.Tab>
                                {projectData.pictures.length > 0 &&
                                    <Tabs.Tab
                                        value="gallery"
                                        leftSection={
                                            <IconPhoto style={iconStyle} />
                                        }
                                    >
                                        Picture
                                    </Tabs.Tab>
                                }
                                {projectData.source && (
                                    <Tabs.Tab value="source-code">
                                        <NavLink
                                            href={projectData.source}
                                            leftSection={
                                                <IconBrandGithub
                                                style={iconStyle}
                                            />
                                            }
                                            label="Link"
                                        />
                                    </Tabs.Tab>
                                )}
                            </Tabs.List>

                            <Tabs.Panel value="functionalities">
                                {projectData.functionality &&
                                    projectData.functionality.length > 0 && (
                                        <List
                                            spacing="xs"
                                            size="xl"
                                            center
                                            icon={
                                                <ThemeIcon
                                                    color="teal"
                                                    size={24}
                                                    radius="xl"
                                                >
                                                    <IconCircleCheck
                                                        style={{
                                                            width: rem(16),
                                                            height: rem(16),
                                                        }}
                                                    />
                                                </ThemeIcon>
                                            }
                                        >
                                            {" "}
                                            {projectData.functionality.map(
                                                (functionality, id) => (
                                                    <List.Item
                                                        key={`functionality-${id}`}
                                                    >
                                                        {functionality}
                                                    </List.Item>
                                                )
                                            )}
                                            <List.Item
                                                key={
                                                    "functionaList.Itemty-default"
                                                }
                                            >
                                                Etc
                                            </List.Item>
                                        </List>
                                    )}
                            </Tabs.Panel>

                            <Tabs.Panel value="gallery">
                                {projectData.pictures.length > 0 && (
                                    <>
                                        <img
                                            src={
                                                projectData.pictures[
                                                    activePage - 1
                                                ]
                                            }
                                            alt=""
                                            className="project-pics"
                                        />
                                        <Pagination
                                            total={projectData.pictures.length}
                                            value={activePage}
                                            onChange={setPage}
                                            mt="xl"
                                        />
                                    </>
                                )}
                            </Tabs.Panel>
                        </Tabs>
                    </>
                   
                    
                )}
                <Button
                    onClick={close}
                    variant="filled"
                    color="red"
                    radius="md"
                    size="xl"
                >
                    Close
                </Button>
            </Modal>

            <div id="fh5co-work" className="fh5co-bg-dark">
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>Projects</h2>
                        </div>
                    </div>
                    <div className="row row-projects">
                        <div className="col-md-3 text-center col-padding animate-box">
                            <a
                                onClick={() => modalHandler(1)}
                                className="work work-1"
                            >
                                <div className="desc">
                                    <h3>Car internal system</h3>
                                    <span>Django Rest Api + React</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 text-center col-padding animate-box">
                            <a
                                onClick={() => modalHandler(2)}
                                className="work work-2"
                            >
                                <div className="desc">
                                    <h3>React shop site</h3>
                                    <span>React</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 text-center col-padding animate-box">
                            <a
                                onClick={() => modalHandler(3)}
                                className="work work-3"
                            >
                                <div className="desc">
                                    <h3>Rewritten network education site</h3>
                                    <span>Django</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
