import { Progress } from '@mantine/core';

export default function Skills() {

    return (
        <div id="fh5co-skills" className="animate-box">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                        <h2>Skills</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="progress-wrap">
                            <h3>
                                <span className="name-left">HTML5/CSS3</span>
                                <span className="value-right">70%</span>
                            </h3>
                            <Progress color="#df4f24" value={70} radius="xl" size="lg" animated />
                        </div>
                        <div className="progress-wrap">
                            <h3>
                                <span className="name-left">React</span>
                                <span className="value-right">50%</span>
                            </h3>
                            <Progress color="#149eca" value={50} radius="xl" size="lg" animated/>
                        </div>
                        <div className="progress-wrap">
                            <h3>
                                <span className="name-left">JavaScript</span>
                                <span className="value-right">65%</span>
                            </h3>
                            <Progress color="yellow" value={65} radius="xl" size="lg" animated />
                        </div>
                        <div className="progress-wrap">
                            <h3>
                                <span className="name-left">Djagno</span>
                                <span className="value-right">80%</span>
                            </h3>
                            <Progress color="#0c4b33" value={80} radius="xl" size="lg" animated/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="progress-wrap">
                            <h3>
                                <span className="name-left">SQL</span>
                                <span className="value-right">50%</span>
                            </h3>
                            <Progress color="#6d8e9c" value={50} radius="xl" size="lg" animated/>
                        </div>
                        <div className="progress-wrap">
                            <h3>
                                <span className="name-left">Python</span>
                                <span className="value-right">80%</span>
                            </h3>
                            <Progress color="green" value={80} radius="xl" size="lg" animated/>
                        </div>
                        <div className="progress-wrap">
                            <h3>
                                <span className="name-left">Go</span>
                                <span className="value-right">40%</span>
                            </h3>
                            <Progress color="DodgerBlue" value={40} radius="xl" size="lg" animated/>
                        </div>
                        <div className="progress-wrap">
                            <h3>
                                <span className="name-left">Docker</span>
                                <span className="value-right">40%</span>
                            </h3>
                            <Progress color="DodgerBlue" value={40} radius="xl" size="lg" animated/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
