import React from 'react';
import { render } from '@testing-library/react';
import Virus from '../../assets/icons/coronavirus.svg';
import Bacteria from '../../assets/icons/bacteria.svg';
import BacteriaGroup from '../../assets/icons/bacteria-group.png';
import Wind from '../../assets/icons/wind.png';
import Handshake from '../../assets/icons/handshake.png';
import tiredness from '../../assets/icons/tiredness.png';
import chest from '../../assets/icons/chest.png';
import fever from '../../assets/icons/fever.png';
import nose from '../../assets/icons/nose.png';
import throat from '../../assets/icons/throat.png';
import mask from '../../assets/icons/mask.png';
import liquidsoap from '../../assets/icons/liquidsoap.png';
import spary from '../../assets/icons/spray.png';
import tissue from '../../assets/icons/tissue.png';
// import medicalmask from '../../assets/icons/medicalmask.png';
// import handrail from '../../assets/icons/handrail.png';
import headache from '../../assets/icons/headache.png';
import CoronaRed from '../../assets/icons/bacteriared.svg';
import CoronaBlue from '../../assets/icons/bacteriablue.svg';
import Drink from '../../assets/icons/drink.svg';
import Highchartdemo from '../highchart/highchartdemo';
class Overview extends React.Component{
    render(){
        return(
            <div>
                <div>
                            <div className="row">
                                <div className="col-md-12 pl-5 pr-5">
                                    <div className="d-flex align-items-center justify-content-center section-1">
                                        <div className="section1-heading d-flex flex-column justify-content-center align-items-center">
                                            <span style={{fontWeight: 600, fontSize: "1.8rem", color: "#CC3733", letterSpacing: "1px"}}>COVID-19 Alert</span>
                                            <span style={{letterSpacing: "1px", fontSize: "3rem", color: "#4e4e4e", textAlign: "center"}}>Stay At Home Quarantine To Stop CoronaVirus.</span>
                                            <p style={{letterSpacing: "1px", fontWeight: "bold", maxWidth: "700px", textAlign: "center", marginTop: "1rem", textTransform: "capitalize"}}>
                                                There is no specific medicine to prevent or treat coronavirus disease (COVID-19). people may need supportive care to.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bacteria-group">
                                                <img src={Bacteria} alt="covid-bacteria" className="image-animate-1"/>
                                                <img src={CoronaRed} alt="covid-bacteria" className="image-animate-2"/>
                                                <img src={CoronaBlue} alt="covid-bacteria" className="image-animate-3"/>
                                    </div>
                                </div>
                            </div>
                            <div className="section-2 mt-5 mb-5">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="bg-corona d-flex align-items-center justify-content-center">
                                            <img src={BacteriaGroup} alt="group-bacteria" style={{maxHeight: "200px"}}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="section2-info d-flex flex-column">
                                            <div className="heading-info">
                                                What is Covid-19
                                            </div>
                                            <div className="heading-sub-info">
                                                Coronavirus
                                            </div>
                                            <div className="desc-info">
                                                Corona virus is a type of virus which is newly identified type has cause a recent outbreak of respiratory illness now called COVID-19.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="section-3 mt-5">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="section-3-info d-flex flex-column align-items-center justify-content-center ">
                                            <div className="heading-info">
                                                Covid-19
                                            </div>
                                            <div className="heading-sub-info mt-3">
                                                Contagion
                                            </div>
                                            <div className="desc-info mt-3 text-center" style={{maxWidth: "700px"}}>
                                                COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                                <div className="row mt-5 mb-5">
                                    <div className="col-md-12">
                                        <div className="contagion-container d-flex flex-column align-items-center">
                                            <ul>
                                                <li className="d-flex flex-column align-items-center justify-content-center">
                                                    <img src={Wind} alt="wind"/>
                                                        <div className="heading-sub-info mt-4">
                                                            Air Transmission
                                                        </div>
                                                        <div className="desc-info mt-5 text-center" style={{maxWidth: "300px"}}>
                                                            Objectively evolve tactical enterprise before extensible initiatives. efficiently simplify
                                                        </div>
                                                </li>
                                                <li className="d-flex flex-column align-items-center justify-content-center">
                                                    <img src={Handshake} alt="wind"/>
                                                        <div className="heading-sub-info mt-4">
                                                            Human Contacts
                                                        </div>
                                                        <div className="desc-info mt-5 text-center" style={{maxWidth: "300px"}}>
                                                            Washing Your hands is one of the the simplest way you can proctect
                                                        </div>
                                                </li>
                                                <li className="d-flex flex-column align-items-center justify-content-center">
                                                    <img src={Drink} alt="wind"/>
                                                        <div className="heading-sub-info mt-4">
                                                            Contained Objects
                                                        </div>
                                                        <div className="desc-info mt-5 text-center" style={{maxWidth: "300px"}}>
                                                            use the tissue while sneezing. in this way you can protect your droplets.
                                                        </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-4 mt-5">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="section-4-info d-flex flex-column align-items-center justify-content-center">
                                            <div className="heading-info">
                                                    Covid-19
                                                </div>
                                                <div className="heading-sub-info mt-3">
                                                    Symptoms
                                                </div>
                                                <div className="desc-info mt-3 text-center" style={{maxWidth: "700px"}}>
                                                Seek immediate medical attention if you have serious symptoms.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-12">
                                        <div className="prevention-container d-flex align-items-center justify-content-center">
                                            <ul>
                                                <li>
                                                    <img src={fever} alt="fever"/>
                                                    <div className="mt-3">
                                                        Wear Mask    
                                                    </div>
                                                </li>
                                                <li >
                                                    <img src={throat} alt="thorat"/>
                                                    <div className="mt-3">
                                                        Throat Pain    
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src={headache} alt="headache"/>
                                                    <div className="mt-3">
                                                        Headache    
                                                    </div>
                                                </li>
                                                <li >
                                                    <img src={nose} alt="nose"/>
                                                    <div className="mt-3">
                                                        Runny Nose    
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src={tiredness} alt="tiredness"/>
                                                    <div className="mt-3">
                                                       Tiredness   
                                                    </div>
                                                </li>
                                                <li>
                                                <img src={chest} alt="chest"/>
                                                    <div className="mt-3">
                                                       Chest Pain   
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-5 mt-5">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="section-4-info d-flex flex-column align-items-center justify-content-center">
                                            <div className="heading-info">
                                                    Covid-19
                                                </div>
                                                <div className="heading-sub-info mt-3">
                                                    What should we do
                                                </div>
                                                <div className="desc-info mt-3 text-center" style={{maxWidth: "500px"}}>
                                                You can reduce your chances of being infected or spreading COVID-19 by taking some simple precautions:
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-12">
                                        <div className="prevention-container d-flex align-items-center justify-content-center">
                                            <ul>
                                                <li>
                                                    <img src={mask} alt="fever"/>
                                                    <div className="mt-3">
                                                        Wear A Mask    
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src={liquidsoap} alt="thorat"/>
                                                    <div className="mt-3">
                                                        Use Soap 
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src={tissue} alt="headache"/>
                                                    <div className="mt-3">
                                                        Use Nose- Rag    
                                                    </div>
                                                </li>
                                                <li >
                                                    <img src={Handshake} alt="nose"/>
                                                    <div className="mt-3">
                                                        Avoid Handshake   
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src={spary} alt="tiredness"/>
                                                    <div className="mt-3">
                                                       Disinfect Contact Elements
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        )
    }
}

export default Overview;