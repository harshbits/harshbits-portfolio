/*
    Title: timeline.jsx
    Version: 1.0.1
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/harshbits-portfolio/
*/
import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';

class TimelineComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false,
          expanded4: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
      this.setState({expanded3: expanded3});
    };

    handleExpandChange4 = (expanded4) => {
      this.setState({expanded4: expanded4});
    };

    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleExpand2 = () => {
      this.setState({expanded2: true});
    };

    handleExpand3 = () => {
      this.setState({expanded3: true});
    };

    handleExpand4 = () => {
      this.setState({expanded4: true});
    };

    handleReduce = () => {
      this.setState({expanded1: false});
    };

    handleReduce2 = () => {
      this.setState({expanded2: false});
    };

    handleReduce3 = () => {
      this.setState({expanded3: false});
    };

    handleReduce4 = () => {
      this.setState({expanded4: false});
    };
    render() {
        return (
            <div className="timeline">
              <p className="headline"><h2>Professional Experience</h2></p>
              <br/>
                  <div className="timeline-entry">
                    <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="Software Engineer" subtitle="Copart, Inc. Dallas, TX"
                          actAsExpander={true} showExpandableButton={true} avatar="copart.jpg"/>
                        <CardText expandable={true}>
                            May 2017 - Current
                            <br/>
                            Development of Microservices.
                            <br/>
                            - Copart Back Office
                            <br/>
                              <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                  <Chip>Spring Boot</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Java 8</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Messanging & Cloud Services</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>OAuth2</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>React + Redux</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Jenkins</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Confluence, JIRA</Chip>
                                </div>
                              </div>
                        </CardText>
                    </Card>
                  </div>
                  <div className="timeline-entry">
                  <Card expanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                      <CardHeader
                        title="Software Engineer Intern"
                        subtitle="Copart, Inc. Dallas, TX"
                        actAsExpander={true} showExpandableButton={true}
                        avatar="copart.jpg"/>
                      <CardText expandable={true}>
                          January 2016 - May 2017.
                          <br/>
                          Development of Microservices.
                          <br/>
                          - Image and Document Service
                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>Spring Boot</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Java 8</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Messanging & Cloud Services</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>OAuth2</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>React + Redux</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Jenkins</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Confluence, JIRA</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded3} onExpandChange={this.handleExpandChange3}>
                      <CardHeader title="Jr. Software Developer" subtitle="Orbit IT Solutions, Vadodara, India"
                        actAsExpander={true} showExpandableButton={true}
                        avatar="orbit.jpg"/>
                      <CardText expandable={true}>
                          June	2014 -	November 2014.
                          <br/>
                          Development of Desktop Application.
                          <br/>
                          - Quality Management System

                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>Spring MVC</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>JavaFX</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Eclipse RCP</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>SWT</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>RESTful Web Services</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Confluence</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded4} onExpandChange={this.handleExpandChange4}>
                      <CardHeader title="Software Engineer Intern" subtitle="Indian Railways, New Delhi, India"
                        actAsExpander={true} showExpandableButton={true}
                        avatar="cris.jpg"/>
                      <CardText expandable={true}>
                          June	2013 -	July	2013
                          <br/>
                          Improvement of Middle Tier Architecture in FOIS.

                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>Java</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>C/C++</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Pro C</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Middle Tier Architecture</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Oracle Tuxedo</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
            </div>
        );
    }
}

export default TimelineComponent;
