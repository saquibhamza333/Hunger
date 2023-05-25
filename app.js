import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=>{
    return(
        <div className="header">
        <div className="logo-container">
           <img src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?size=626&ext=jpg" className="logo"/>

        </div>
        <div className="search">

        </div>
        <div className ="nav-items">
        <ul>
        <li>
            Help
        </li>
        <li>
            Offers 
        </li>

        <li>
            Cart
        </li>
        </ul>

        </div>

        </div>
       


    );
}


const RestaurantCard = (props)=>{

    
     return(
        <div className ="res-card">
        <h3>{props.data.name}</h3>
        <h4>{props.data.cuisines} </h4>
      

        </div>
    );
};

const resObj = {
   
    type: "restaurant",
    data: {
      type: "F",
      id: "21947",
      name: "My Friends Circle Restaurant",
      uuid: "35c7e2af-fe05-4ce6-8a16-176e027d19e7",
      city: "3",
      area: "Medchal Road",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "l3aclqvjxrk0trt1r5ph",
      cuisines: [
        "Biryani",
        "Chinese",
        "Tandoor",
        "Haleem"
      ],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 4.800000190734863,
      slugs: {
        restaurant: "my-friends-circle-restaurant-medchal-road-sainikpuri-test",
        city: "hyderabad"
      },
      cityState: "3",
      address: "Plot No. 8, Near Laxmi Plaza, Near Suchitra Circle, Medchal Road, Ramraju Nagar, Ramraj Nagar, Ramraju Nagar, Jeedimetla, Secunderabad",
      locality: "Suchitra Circle",
      parentId: 19277,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4000,
            message: ""
          },
          {
            name: "time",
            fee: 0,
            message: ""
          },
          {
            name: "special",
            fee: 0,
            message: ""
          }
        ],
        totalFees: 4000,
        message: "",
        title: "Delivery Charge",
        amount: "4000",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "4.8 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
        discountTag: "",
        headerTypeV2: 0
      },
      sla: {
        restaurantId: "21947",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 4.800000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 10000,
      new: false
    },
    subtype: "basic"
  };

      


const Body = () => {
    return(
        <div className="body">
        <div className="search">Search

        </div>
        <div className ="res-container">
            <RestaurantCard  resData = {resObj} />
          
        </div>


        </div>
    );
}

const Applayout = () => {
    return(
       <>
       <Header />
       <Body />
    
 </>

    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
