import React from 'react'

const Biography = ({ imageUrl }) => {
    return (
        <>
            <div className="container biography">
                <div className="banner">
                    <img src={imageUrl} alt="whoweare" />
                </div>
                <div className="banner">
                    <p>Biography</p>
                    <h4>Who We Are</h4>
                    <p>
                        ZeeCare Medical Institute is a premier healthcare organization committed to delivering high-quality, patient-centered medical services. 
                        Established with a vision to provide world-class healthcare to individuals and families,
                         ZeeCare has grown into a trusted name in the medical field, offering comprehensive care across a wide range of specialties.
                    </p>
                    <h4>Our Mission</h4>
                    <p>
                    At ZeeCare, our mission is to enhance the well-being of our community by providing personalized
                     healthcare services with compassion, integrity, and professionalism. We strive to create a 
                     welcoming environment where every patient feels valued and receives the highest standard of care.
                    </p>
                    <p>Looking ahead, ZeeCare aims to expand its reach and services, leveraging innovation and 
                        technology to provide even more comprehensive healthcare solutions. Our vision is to become 
                        a global leader in healthcare, continuously improving the lives of our patients while upholding 
                        the highest ethical standards in the medical profession.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Biography
