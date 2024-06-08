import React from 'react';

const About = () => {
    return (
        <div className="bg-custom min-h-screen flex flex-col justify-center items-center p-4 font-avenir">
            <div className="text-center">
                <h1 className="text-5xl font-bold font-finger-paint">
                    <span style={{ marginRight: '0.5rem', fontSize: '5rem', color: '#000080' }}>B</span>
                    <span style={{ marginRight: '0.5rem', fontSize: '5rem', color: '#FF0000' }}>L</span>
                    <span style={{ marginRight: '0.5rem', fontSize: '5rem', color: '#006400' }}>A</span>
                    <span style={{ marginRight: '0.5rem', fontSize: '5rem', color: '#FFDAB9' }}>S</span>
                    <span style={{ fontSize: '5rem', color: '#FFA07A' }}>T</span>
                </h1>
                <h2 className='pt-5 font-finger-paint text-xl'>A BOYS' CLUB</h2>
                <h2 className='font-finger-paint text-xl'>IN THE WINDSOR ESSEX AREA</h2>
            </div>
            <div className="mt-8">
                <h2 className="text-xl py-5 text-sky-600 font-normal">LEADERSHIP</h2>
                <div className="max-w-xl mx-auto rounded-lg bg-white p-4">
                    <p><b>Charles Sendegeya</b> has been a Windsor resident since 2013 and volunteer
                        coach and mentor with Windsor Boys’ Club. Charles is a mechanical engineer
                        and product development engineer at Gates Canada, Windsor. He brings youth,
                        education and training experience from global reach organizations and and from
                        higher education at Makerere University, Strathmore University and the
                        University of Windsor.
                    </p>
                    <br></br>
                    <p>
                        <b>Mark McGuire</b> is an Essex County resident since birth and volunteer coach with
                        the Windsor Boys Club. Mark is a Leadership Development Contractor for
                        Crestcom International in S. W. Ontario. Mark is also a Coaching Association of
                        Canada learning facilitator and Caribou Boys Camp director. Mark is Respect in
                        Sport-certified and a graduate of St Clair College, University of Windsor and The
                        Goethe Institut ( Munich).
                    </p>
                </div>
                <div className="max-w-xl mx-auto rounded-lg bg-gray-300 p-4 m-5">
                    <p className='text-sky-600'>Don't let this opportunity pass you by. Register your son today to open new opportunities for spiritual and physical development.</p>
                </div>
                <p className='text-center uppercase text-sky-600'>For info and registration: 519 996 2338</p>
            </div>
        </div>
    );
};

export default About;
