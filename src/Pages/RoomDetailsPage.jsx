import { useParams } from "react-router-dom";
import Menu from "../components/menu";
import Footer from "../components/Footer";
import { useState, useEffect, useRef } from "react";

export default function RoomDetailsPage() {
    let { id } = useParams();
    let [slideIndex, setSlideIndex] = useState(1);
    let [selectedRoomId, setSelectedRoomId] = useState(1);

    const roomData = {
        1: {
            info: "Spacious living room of 25m² with large windows, natural light, smart TV and sofa. Located on the 2nd floor. Includes daily cleaning service and balcony view.",
            amenities: [
                { icon: "fa-shower", text: "Private Shower" },
                { icon: "fa-wifi", text: "WiFi 100Mb/s" },
                { icon: "fa-tv", text: "Smart TV" },
                { icon: "fa-couch", text: "Modern Sofa" },
                { icon: "fa-door-closed", text: "Digital Lock" }
            ]
        },
        2: {
            info: "Bright dining room of 18m² perfect for meetings or meals. Features a 4-seat dining table, minimalist decor, and open kitchen view. On the 1st floor.",
            amenities: [
                { icon: "fa-wifi", text: "WiFi 100Mb/s" },
                { icon: "fa-utensils", text: "Dining Table" },
                { icon: "fa-thermometer-half", text: "Heating" },
                { icon: "fa-lightbulb", text: "Energy-efficient lighting" },
                { icon: "fa-window-maximize", text: "Large Window" }
            ]
        },
        3: {
            info: "Comfortable 20m² bedroom with queen-size bed, desk, and soundproof windows. Ideal for remote work and rest. 3rd floor, includes daily cleaning.",
            amenities: [
                { icon: "fa-bed", text: "Queen Bed" },
                { icon: "fa-laptop", text: "Work Desk" },
                { icon: "fa-window-close", text: "Soundproof Windows" },
                { icon: "fa-wifi", text: "High-Speed WiFi" },
                { icon: "fa-moon", text: "Blackout Curtains" }
            ]
        },
        4: {
            info: "Modern office room with ergonomic chair, fast internet, and natural lighting. Includes access to kitchen and shared coffee station. 2nd floor.",
            amenities: [
                { icon: "fa-chair", text: "Ergonomic Chair" },
                { icon: "fa-wifi", text: "WiFi 200Mb/s" },
                { icon: "fa-coffee", text: "Coffee Station" },
                { icon: "fa-clock", text: "24/7 Access" },
                { icon: "fa-wheelchair", text: "Wheelchair Accessible" }
            ]
        }
    };

    const room = roomData[selectedRoomId];

    const images = [
        { src: "https://www.w3schools.com/w3images/livingroom.jpg", title: "Living Room" },
        { src: "https://www.w3schools.com/w3images/diningroom.jpg", title: "Dining Room" },
        { src: "https://www.w3schools.com/w3images/bedroom.jpg", title: "Bedroom" },
        { src: "https://www.w3schools.com/w3images/livingroom2.jpg", title: "Office Room" }
    ];

    let slidesRef = useRef([]);
    let dotsRef = useRef([]);

    function ShowSlide(num) {
        let newIndex = num;
        if (newIndex > images.length) newIndex = 1;
        if (newIndex < 1) newIndex = images.length;
        setSlideIndex(newIndex);
        setSelectedRoomId(newIndex);
    }

    useEffect(() => {
        slidesRef.current.forEach((slide) => {
            if (slide) slide.style.display = "none";
        });
        dotsRef.current.forEach((dot) => {
            if (dot) dot.classList.remove("w3-opacity-off");
        });
        if (slidesRef.current[slideIndex - 1]) slidesRef.current[slideIndex - 1].style.display = "block";
        if (dotsRef.current[slideIndex - 1]) dotsRef.current[slideIndex - 1].classList.add("w3-opacity-off");
    }, [slideIndex]);

    function imagenCurrent(n) {
        ShowSlide(n);
    }

    return (
        <>
            <Menu />
            <div className="w3-container" id="apartment">
                <div className="w3-row-padding">
                    <div className="w3-half">
                        <h2 className="w3-text-green">The Apartment #{id}</h2>
                        {images.map((img, i) => (
                            <div
                                key={i}
                                className="w3-display-container mySlides"
                                ref={(div) => (slidesRef.current[i] = div)}
                                style={{ display: i === 0 ? "block" : "none" }}
                            >
                                <img src={img.src} style={{ width: "100%", marginBottom: "-6px" }} alt={img.title} />
                                <p>{img.title}</p>
                            </div>
                        ))}
                        <div className="w3-row-padding w3-section">
                            {images.map((img, i) => (
                                <div key={i} className="w3-col s3">
                                    <img
                                        className={`demo w3-opacity w3-hover-opacity ${i === 0 ? "w3-opacity-off" : ""}`}
                                        src={img.src}
                                        style={{ width: "100%", cursor: "pointer" }}
                                        onClick={() => imagenCurrent(i + 1)}
                                        title={img.title}
                                        ref={(dot) => (dotsRef.current[i] = dot)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w3-half">
                        <div className="w3-container">
                            <h4><strong>The space</strong></h4>
                            <div className="w3-row w3-large">
                                <div className="w3-col s6">
                                    <p><i className="fa fa-fw fa-male"></i> Max people: 4</p>
                                    <p><i className="fa fa-fw fa-bath"></i> Bathrooms: 2</p>
                                    <p><i className="fa fa-fw fa-bed"></i> Bedrooms: 1</p>
                                </div>
                                <div className="w3-col s6">
                                    <p><i className="fa fa-fw fa-clock-o"></i> Check In: After 3PM</p>
                                    <p><i className="fa fa-fw fa-clock-o"></i> Check Out: 12PM</p>
                                </div>
                            </div>
                            <hr />
                            <h4><strong>Amenities</strong></h4>
                            <div className="w3-row w3-large">
                                <ul style={{ paddingLeft: "20px" }}>
                                    {room.amenities.map((item, index) => (
                                        <li key={index}><i className={`fa fa-fw ${item.icon}`}></i> {item.text}</li>
                                    ))}
                                </ul>
                            </div>
                            <hr />
                        </div>
                    </div>

                    <div className="w3-row-padding">
                        <div className="w3-half">
                            <h4><strong>Extra Info</strong></h4>
                            <p>{room.info}</p>
                            <p>We accept: <i className="fa fa-credit-card w3-large"></i> <i className="fa fa-cc-mastercard w3-large"></i> <i className="fa fa-cc-amex w3-large"></i> <i className="fa fa-cc-visa w3-large"></i> <i className="fa fa-cc-paypal w3-large"></i></p>
                            <hr />
                            <h4><strong>Rules</strong></h4>
                            <p>Smoking is not allowed. Pets are allowed on request. Quiet hours from 10PM to 8AM.</p>
                            <p>Subscribe to receive updates on available dates and special offers.</p>
                            <p><button className="w3-button w3-green w3-third">Subscribe</button></p>
                        </div>

                        <div className="w3-half">
                            <div className="w3-container" id="contact">
                                <h2>Contact</h2>
                                <i className="fa fa-map-marker" style={{ width: "30px" }}></i> Chicago, US<br />
                                <i className="fa fa-phone" style={{ width: "30px" }}></i> Phone: +00 151515<br />
                                <i className="fa fa-envelope" style={{ width: "30px" }}></i> Email: mail@mail.com<br />
                                <p>Questions? Go ahead, ask them:</p>
                                <form>
                                    <p><input className="w3-input w3-border" type="text" placeholder="Name" required name="Name" /></p>
                                    <p><input className="w3-input w3-border" type="text" placeholder="Email" required name="Email" /></p>
                                    <p><input className="w3-input w3-border" type="text" placeholder="Message" required name="Message" /></p>
                                    <button type="submit" className="w3-button w3-green w3-third">Send a Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

