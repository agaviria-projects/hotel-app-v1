import Room from "./Room";

let rooms = [
    {
        "id" : 1,
        "name": "Single Room",
        "price": 99,
        "type" : "Single Room",
        "image": "https://www.w3schools.com/w3images/room_single.jpg",
        "size": "15m²",
    },
    {
        "id" : 2,    
        "name": "Double Room",
        "price": 149,
        "type" : "Couple Room",
        "image": "https://www.w3schools.com/w3images/room_deluxe.jpg",
        "size": "25m²",
    },
    {
        "id" : 3,
        "name": "Deluxe Room",
        "price": 199,
        "type" : "Family Room",
        "image": "https://www.w3schools.com/w3images/room_double.jpg",
        "size": "40m²",
    }
];

export default function Rooms() {
  return (
    <>
        <div className="w3-container w3-margin-top" id="rooms">
            <h3>Rooms</h3>
            <p>Make yourself at home is our slogan. We offer the best beds in the industry. Sleep well and rest well.</p>
        </div>
        
        <div className="w3-row-padding">
            <div className="w3-col m3">
            <label><i className="fa fa-calendar-o"></i> Check In</label>
            <input className="w3-input w3-border" type="text" placeholder="DD MM YYYY" />
            </div>
            <div className="w3-col m3">
            <label><i className="fa fa-calendar-o"></i> Check Out</label>
            <input className="w3-input w3-border" type="text" placeholder="DD MM YYYY" />
            </div>
            <div className="w3-col m2">
            <label><i className="fa fa-male"></i> Adults</label>
            <input className="w3-input w3-border" type="number" placeholder="1" />
            </div>
            <div className="w3-col m2">
            <label><i className="fa fa-child"></i> Kids</label>
            <input className="w3-input w3-border" type="number" placeholder="0" />
            </div>
            <div className="w3-col m2">
            <label><i className="fa fa-search"></i> Search</label>
            <button className="w3-button w3-block w3-black">Search</button>
            </div>
        </div>
        <div className="w3-row-padding w3-padding-16">
            {
                rooms.map((data)=> <Room key={data.id} dataRoom={data} /> )
            }
        </div>
    </>
  )
}
