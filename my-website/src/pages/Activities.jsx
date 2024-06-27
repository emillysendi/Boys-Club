import React from 'react';
import image1 from '../assets/IMG_8315.JPG';
import image2 from '../assets/IMG_8324.JPG';
import image3 from '../assets/IMG_8298.JPG';

const Activities = () => {
    return (
        <div className="bg-custom min-h-screen flex flex-col justify-center items-center p-4 font-avenir">
            <div className="text-center">
                <h1 className="text-5xl font-bold font-finger-paint">
                    <span style={{ marginRight: '0.5rem', fontSize: '5rem', color: '#000080' }}>B</span>
                    <span style={{ marginRight: '0.5rem', fontSize: '5rem', color: '#FF0000' }}>L</span>
                    <span style={{ marginRight: '0.5rem', fontSize: '5rem', color: '#006400' }}>A</span>
                    <span style={{ marginRight: '0.5rem', fontSize: '5rem', color: '#FFDAB9' }}>S</span>
                    <span style={{ fontSize: '5rem', color: '#FF8C00' }}>T</span>
                </h1>
                <h2 className='pt-5 font-finger-paint text-xl'>PAST ACTIVITIES</h2>
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-normal py-5 text-sky-600 uppercase">Aviation Museum (March 2024)</h2>
                <div className="max-w-xl mx-auto rounded-lg bg-white p-4">
                    <p>On March 30, 2024, the Boys' Club embarked on an exciting visit to the
                        Canadian Aviation Museum in Windsor, Ontario. The trip offered a fantastic
                        blend of education and adventure, sparking the boys’ interest in aviation history
                        and technology.</p>
                    <p>
                        Our journey began with a warm welcome from the museum staff, who provided
                        an engaging overview of the museum's exhibits. The boys were thrilled to see
                        an impressive collection of historical aircraft, including the iconic Avro Lancaster
                        bomber and the de Havilland Mosquito. The hands-on exhibits allowed the boys
                        to climb into cockpits and experience the thrill of piloting vintage aircraft.
                    </p>
                    <p>
                        One of the highlights was a special guided tour by the Museum Vice President,
                        Mr. John Robinson, who shared captivating stories about the planes and their
                        roles in Canadian aviation history. The boys also watched several volunteer
                        technicians who give time to restore aircraft at the museum do their work. They
                        hopefully will take in this example of service to our community.
                    </p>
                    <p>
                        Here are some pictures from the trip.
                    </p>
                </div>
            </div>
            <div className="mt-8 max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-md overflow-hidden">
                    <img src={image1} alt="activity one" className="w-full h-auto object-cover" />
                </div>
                <div className="bg-white rounded-md overflow-hidden">
                    <img src={image2} alt="activity two" className="w-full h-auto object-cover" />
                </div>
                <div className="bg-white rounded-md overflow-hidden">
                    <img src={image3} alt="activity three" className="w-full h-auto object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Activities;
