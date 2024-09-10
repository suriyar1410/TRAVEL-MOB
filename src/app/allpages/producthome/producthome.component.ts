import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { VehicleDetailsPage } from '../vehicle-details/vehicle-details.page';
import { CartService } from '../cart.service'; 

@Component({
  selector: 'app-producthome',
  templateUrl: './producthome.component.html',
  styleUrls: ['./producthome.component.scss'],
})
export class ProducthomeComponent   {
  constructor( private router: Router,private navCtrl: NavController,private modalController: ModalController,private cartService: CartService) { }

  
  isGalleryOpen = false;
  currentImageIndex: number = 0; 
  images: string[] = ['../../../assets/cityscape-singapore-city-skyline.png',
    '../../../assets/fabulous-top-aerial-view-from-famous-rooftop-infinity-pool-sunny-day-overlooking-harbor-iconic-skyscrapers.png',
    '../../../assets/singapore-july-16-2015-view-marina-bay-marina-bay-is-one-most-famous-tourist-attraction-singapore.png', 
    '../../../assets/tourist-gardens-building-skyline-sky.png',
    
  ];
  
  
  
  closeGallery() {
    this.isGalleryOpen = false;
  }
  
  
  
  

 // Package options (these can be fetched from an API or can be dynamic)
packages = [
  {
    title: "Admission to Sands Skypark Observation Deck (Before 4PM)",
    description: "No Cancellation • Instant Confirmation",
    confirmationType: "Instant Confirmation",
    entryType: "Entry with voucher",
    validity: "Valid on selected date",
    included: [
      "One single entry to Sands SkyPark observation deck tickets",
      "Entry is strictly before 4pm daily for this package."
    ],
    notIncluded: [
      "Admission to infinity pool",
      "Other personal expenses",
      "Tips and gratuities"
    ],
    eligibility: [
      "Children aged 0-1 can enter free of charge",
      "Participants must be 85cm and above in height to participate in this activity"
    ],
    termsConditions: [
      "You’ll get confirmation within minutes. If you don't see any confirmation, reach out to our customer support.",
      "Re-entry is not allowed after you leave the venue.",
      "Lost tickets will not be replaced."
    ],
    bookmarked: false,
  },
  {
    title: "Admission to Sands Skypark Observation Deck (After 5PM)",
    description: "No Cancellation • Instant Confirmation",
    confirmationType: "Instant Confirmation",
    entryType: "Entry with voucher",
    validity: "Valid on selected date",
    included: [
      "One single entry to Sands SkyPark observation deck tickets",
      "Entry is strictly after 5pm daily for this package."
    ],
    notIncluded: [
      "Admission to infinity pool",
      "Other personal expenses",
      "Tips and gratuities"
    ],
    eligibility: [
      "Children aged 0-1 can enter free of charge",
      "Participants must be 85cm and above in height to participate in this activity"
    ],
    termsConditions: [
      "You’ll get confirmation within minutes. If you don't see any confirmation, reach out to our customer support.",
      "Re-entry is not allowed after you leave the venue.",
      "Lost tickets will not be replaced."
    ],
    bookmarked: false,
  },
  {
    title: "Admission to Sands Skypark Observation Deck (Before 4PM)",
    description: "No Cancellation • Instant Confirmation",
    confirmationType: "Instant Confirmation",
    entryType: "Entry with voucher",
    validity: "Valid on selected date",
    included: [
      "One single entry to Sands SkyPark observation deck tickets",
      "Entry is strictly before 4pm daily for this package."
    ],
    notIncluded: [
      "Admission to infinity pool",
      "Other personal expenses",
      "Tips and gratuities"
    ],
    eligibility: [
      "Children aged 0-1 can enter free of charge",
      "Participants must be 85cm and above in height to participate in this activity"
    ],
    termsConditions: [
      "You’ll get confirmation within minutes. If you don't see any confirmation, reach out to our customer support.",
      "Re-entry is not allowed after you leave the venue.",
      "Lost tickets will not be replaced."
    ],
    bookmarked: false,
  },
  
  // Add more packages as needed...
];






  goToPackageDetails(packageData: any) {
    this.navCtrl.navigateForward('/package-details', {
      state: { package: packageData }
    });
  }

  goToCart(){
    this.router.navigate(['/cart']);
  }



  bookmarkPackage(packagedata: any) {
    this.cartService.addToCart(packagedata);  
    console.log('Package added to cart:', packagedata);
  }

 


  
  navigateToProductPage() {
    this.router.navigate(['/calenpage']); 
  }
  navigateToinfoPage() {
    this.router.navigate(['/home']); 
  }

  





  serviceType: string = 'oneWay';
  selectedVehicle: string="";



  vehicles: any = {
    'Standard Sedan': {
      seatingCapacity: '4 Pax',
      importantInformation: [
        'For Hotel or Local Transfers, 10-minutes FREE waiting time is offered from the pick up time',
        'Please meet the driver in the Driveway OR in lobby Or in the Pickup Point as advised by the driver.'
      ],
      exclusions: [
        'Add-Ons and Surcharges are NOT INCLUDED for this product/ticket and have to be purchased separately to supplement the product/ticket.',
        [
          'Infant Seat Add-On is applicable only for SEDAN, SUV, MPV, MINIVAN and LUXURY vehicle types.',
          'Child Booster Seat Add-On is applicable only for SEDAN, SUV, MPV, MINIVAN and LUXURY vehicle types.',
          'Additional Stops (optional)',
          'Late-Hour/Mid-Night/Early-Morning Surcharges apply by default from 2200 Hours till 0730 Hours for all vehicle types.',
          'Out-Of-City Surcharges apply for pick-up or drop-off points outside the Airport and City Hotels',
          'Holiday & Special Events Surcharges apply by default for English New Year, Chinese New Year, Christmas, F1 Night Race and Singapore Air Shows dates for all vehicle types.'
        ]
      ],
      validity: 'Valid on visit date',
      howToUse: [
        'Hotel Pick up: Please wait Hotel Lobby (or) Drive-way (or) Pickup Point as advised by the driver partner',
        'Cancellation Policy',
        '100% return.',
        'Refund 1 day(s) before visit date.'
      ],
      termsConditions: [
        'Important Information',
        'Ticket valid on the selected transfer date.',
        'In the event the pre-booked vehicle type is NOT suitable (seat capacity, traveling with Infant & Child) for the total arrived passengers on the day of transfer, we will propose to upgrade the vehicle for an additional charges to be paid by the passenger (or) allow the passenger to book their own additional transportation to accommodate the excess passenger.',
        'Under the Road Traffic Act (Chapter 276, Clause 8), a passenger below 1.35 meters in height to be properly secured by approved child restraint, etc. This rule shall NOT apply in relation to any public taxi, if the person below 1.35 meters in height is a rear seat passenger of the public taxi.',
        'After 10-minutes FREE waiting time for Return / Local Transfers, along with any additional grace time offered by the driver partner, EXTENDED Waiting Time charges apply. (refer to the “Add-Ons and Surcharges” section for details)',
        'Extended or Additional Waiting Time charges will be charged after the FREE waiting time + any allowed grace period by the driver partner SGD15 for every block of 15-minutes for all transfers services.',
        'Guest are requested to wait at the Waiting Point/Pickup Point, Hotel Lobby or Hotel Driveway'
      ]
    },
    'Business Sedan': {
      seatingCapacity: '4 Pax',
      importantInformation: [
        'For Hotel or Local Transfers, 10-minutes FREE waiting time is offered from the pick up time',
        'Please meet the driver in the Driveway OR in lobby Or in the Pickup Point as advised by the driver.'
      ],
      exclusions: [
        'Add-Ons and Surcharges are NOT INCLUDED for this product/ticket and have to be purchased separately to supplement the product/ticket.',
        [
          'Infant Seat Add-On is applicable only for SEDAN, SUV, MPV, MINIVAN and LUXURY vehicle types.',
          'Child Booster Seat Add-On is applicable only for SEDAN, SUV, MPV, MINIVAN and LUXURY vehicle types.',
          'Additional Stops (optional)',
          'Late-Hour/Mid-Night/Early-Morning Surcharges apply by default from 2200 Hours till 0730 Hours for all vehicle types.',
          'Out-Of-City Surcharges apply for pick-up or drop-off points outside the Airport and City Hotels',
          'Holiday & Special Events Surcharges apply by default for English New Year, Chinese New Year, Christmas, F1 Night Race and Singapore Air Shows dates for all vehicle types.'
        ]
      ],
      validity: 'Valid on visit date',
      howToUse: [
        'Hotel Pick up: Please wait Hotel Lobby (or) Drive-way (or) Pickup Point as advised by the driver partner',
        'Cancellation Policy',
        '100% return.',
        'Refund 1 day(s) before visit date.'
      ],
      termsConditions: [
        'Important Information',
        'Ticket valid on the selected transfer date.',
        'In the event the pre-booked vehicle type is NOT suitable (seat capacity, traveling with Infant & Child) for the total arrived passengers on the day of transfer, we will propose to upgrade the vehicle for an additional charges to be paid by the passenger (or) allow the passenger to book their own additional transportation to accommodate the excess passenger.',
        'Under the Road Traffic Act (Chapter 276, Clause 8), a passenger below 1.35 meters in height to be properly secured by approved child restraint, etc. This rule shall NOT apply in relation to any public taxi, if the person below 1.35 meters in height is a rear seat passenger of the public taxi.',
        'After 10-minutes FREE waiting time for Return / Local Transfers, along with any additional grace time offered by the driver partner, EXTENDED Waiting Time charges apply. (refer to the “Add-Ons and Surcharges” section for details)',
        'Extended or Additional Waiting Time charges will be charged after the FREE waiting time + any allowed grace period by the driver partner SGD15 for every block of 15-minutes for all transfers services.',
        'Guest are requested to wait at the Waiting Point/Pickup Point, Hotel Lobby or Hotel Driveway'
      ]
    },
    'Standard Minivan': {
      seatingCapacity: '4 Pax',
      importantInformation: [
        'For Hotel or Local Transfers, 10-minutes FREE waiting time is offered from the pick up time',
        'Please meet the driver in the Driveway OR in lobby Or in the Pickup Point as advised by the driver.'
      ],
      exclusions: [
        'Add-Ons and Surcharges are NOT INCLUDED for this product/ticket and have to be purchased separately to supplement the product/ticket.',
        [
          'Infant Seat Add-On is applicable only for SEDAN, SUV, MPV, MINIVAN and LUXURY vehicle types.',
          'Child Booster Seat Add-On is applicable only for SEDAN, SUV, MPV, MINIVAN and LUXURY vehicle types.',
          'Additional Stops (optional)',
          'Late-Hour/Mid-Night/Early-Morning Surcharges apply by default from 2200 Hours till 0730 Hours for all vehicle types.',
          'Out-Of-City Surcharges apply for pick-up or drop-off points outside the Airport and City Hotels',
          'Holiday & Special Events Surcharges apply by default for English New Year, Chinese New Year, Christmas, F1 Night Race and Singapore Air Shows dates for all vehicle types.'
        ]
      ],
      validity: 'Valid on visit date',
      howToUse: [
        'Hotel Pick up: Please wait Hotel Lobby (or) Drive-way (or) Pickup Point as advised by the driver partner',
        'Cancellation Policy',
        '100% return.',
        'Refund 1 day(s) before visit date.'
      ],
      termsConditions: [
        'Important Information',
        'Ticket valid on the selected transfer date.',
        'In the event the pre-booked vehicle type is NOT suitable (seat capacity, traveling with Infant & Child) for the total arrived passengers on the day of transfer, we will propose to upgrade the vehicle for an additional charges to be paid by the passenger (or) allow the passenger to book their own additional transportation to accommodate the excess passenger.',
        'Under the Road Traffic Act (Chapter 276, Clause 8), a passenger below 1.35 meters in height to be properly secured by approved child restraint, etc. This rule shall NOT apply in relation to any public taxi, if the person below 1.35 meters in height is a rear seat passenger of the public taxi.',
        'After 10-minutes FREE waiting time for Return / Local Transfers, along with any additional grace time offered by the driver partner, EXTENDED Waiting Time charges apply. (refer to the “Add-Ons and Surcharges” section for details)',
        'Extended or Additional Waiting Time charges will be charged after the FREE waiting time + any allowed grace period by the driver partner SGD15 for every block of 15-minutes for all transfers services.',
        'Guest are requested to wait at the Waiting Point/Pickup Point, Hotel Lobby or Hotel Driveway'
      ]
    },
    'Luxury Minivan': {
      seatingCapacity: '5 Pax',
      importantInformation: [
        'For Hotel or Local Transfers, 10-minutes FREE waiting time is offered from the pick up time',
        'Please meet the driver in the Driveway OR in lobby Or in the Pickup Point as advised by the driver.'
      ],
      exclusions: [
        'Add-Ons and Surcharges are NOT INCLUDED for this product/ticket and have to be purchased separately to supplement the product/ticket.',
        [
          'Infant Seat Add-On is applicable only for SEDAN, SUV, MPV, MINIVAN and LUXURY vehicle types.',
          'Child Booster Seat Add-On is applicable only for SEDAN, SUV, MPV, MINIVAN and LUXURY vehicle types.',
          'Additional Stops (optional)',
          'Late-Hour/Mid-Night/Early-Morning Surcharges apply by default from 2200 Hours till 0730 Hours for all vehicle types.',
          'Out-Of-City Surcharges apply for pick-up or drop-off points outside the Airport and City Hotels',
          'Holiday & Special Events Surcharges apply by default for English New Year, Chinese New Year, Christmas, F1 Night Race and Singapore Air Shows dates for all vehicle types.'
        ]
      ],
      validity: 'Valid on visit date',
      howToUse: [
        'Hotel Pick up: Please wait Hotel Lobby (or) Drive-way (or) Pickup Point as advised by the driver partner',
        'Cancellation Policy',
        '100% return.',
        'Refund 1 day(s) before visit date.'
      ],
      termsConditions: [
        'Important Information',
        'Ticket valid on the selected transfer date.',
        'In the event the pre-booked vehicle type is NOT suitable (seat capacity, traveling with Infant & Child) for the total arrived passengers on the day of transfer, we will propose to upgrade the vehicle for an additional charges to be paid by the passenger (or) allow the passenger to book their own additional transportation to accommodate the excess passenger.',
        'Under the Road Traffic Act (Chapter 276, Clause 8), a passenger below 1.35 meters in height to be properly secured by approved child restraint, etc. This rule shall NOT apply in relation to any public taxi, if the person below 1.35 meters in height is a rear seat passenger of the public taxi.',
        'After 10-minutes FREE waiting time for Return / Local Transfers, along with any additional grace time offered by the driver partner, EXTENDED Waiting Time charges apply. (refer to the “Add-Ons and Surcharges” section for details)',
        'Extended or Additional Waiting Time charges will be charged after the FREE waiting time + any allowed grace period by the driver partner SGD15 for every block of 15-minutes for all transfers services.',
        'Guest are requested to wait at the Waiting Point/Pickup Point, Hotel Lobby or Hotel Driveway'
      ]
    },
    'Minibus (Toyota Hiace)': {
      seatingCapacity: '11 Pax',
      importantInformation: [
        'For Hotel or Local Transfers, 10-minutes FREE waiting time is offered from the pick up time',
        'Please meet the driver in the Driveway OR in lobby Or in the Pickup Point as advised by the driver.'
      ],
      exclusions: [
        'Add-Ons and Surcharges are NOT INCLUDED for this product/ticket and have to be purchased separately to supplement the product/ticket.',
        [
          'Infant Seat Add-On is applicable only for SEDAN, SUV, MPV, MINIVAN and LUXURY vehicle types.',
          'Child Booster Seat Add-On is applicable only for SEDAN, SUV, MPV, MINIVAN and LUXURY vehicle types.',
          'Additional Stops (optional)',
          'Late-Hour/Mid-Night/Early-Morning Surcharges apply by default from 2200 Hours till 0730 Hours for all vehicle types.',
          'Out-Of-City Surcharges apply for pick-up or drop-off points outside the Airport and City Hotels',
          'Holiday & Special Events Surcharges apply by default for English New Year, Chinese New Year, Christmas, F1 Night Race and Singapore Air Shows dates for all vehicle types.'
        ]
      ],
      validity: 'Valid on visit date',
      howToUse: [
        'Hotel Pick up: Please wait Hotel Lobby (or) Drive-way (or) Pickup Point as advised by the driver partner',
        'Cancellation Policy',
        '100% return.',
        'Refund 1 day(s) before visit date.'
      ],
      termsConditions: [
        'Important Information',
        'Ticket valid on the selected transfer date.',
        'In the event the pre-booked vehicle type is NOT suitable (seat capacity, traveling with Infant & Child) for the total arrived passengers on the day of transfer, we will propose to upgrade the vehicle for an additional charges to be paid by the passenger (or) allow the passenger to book their own additional transportation to accommodate the excess passenger.',
        'Under the Road Traffic Act (Chapter 276, Clause 8), a passenger below 1.35 meters in height to be properly secured by approved child restraint, etc. This rule shall NOT apply in relation to any public taxi, if the person below 1.35 meters in height is a rear seat passenger of the public taxi.',
        'After 10-minutes FREE waiting time for Return / Local Transfers, along with any additional grace time offered by the driver partner, EXTENDED Waiting Time charges apply. (refer to the “Add-Ons and Surcharges” section for details)',
        'Extended or Additional Waiting Time charges will be charged after the FREE waiting time + any allowed grace period by the driver partner SGD15 for every block of 15-minutes for all transfers services.',
        'Guest are requested to wait at the Waiting Point/Pickup Point, Hotel Lobby or Hotel Driveway'
      ]
    },
    'Minibus': {
      seatingCapacity: '18 Pax',
      importantInformation: [
        'For Hotel or Local Transfers, 10-minutes FREE waiting time is offered from the pick up time',
        'Please meet the driver in the Driveway OR in lobby Or in the Pickup Point as advised by the driver.'
      ],
      exclusions: [
        'Add-Ons and Surcharges are NOT INCLUDED for this product/ticket and have to be purchased separately to supplement the product/ticket.',
        [
          'Infant Seat Add-On is applicable only for SEDAN, SUV, MPV, MINIVAN and LUXURY vehicle types.',
          'Child Booster Seat Add-On is applicable only for SEDAN, SUV, MPV, MINIVAN and LUXURY vehicle types.',
          'Additional Stops (optional)',
          'Late-Hour/Mid-Night/Early-Morning Surcharges apply by default from 2200 Hours till 0730 Hours for all vehicle types.',
          'Out-Of-City Surcharges apply for pick-up or drop-off points outside the Airport and City Hotels',
          'Holiday & Special Events Surcharges apply by default for English New Year, Chinese New Year, Christmas, F1 Night Race and Singapore Air Shows dates for all vehicle types.'
        ]
      ],
      validity: 'Valid on visit date',
      howToUse: [
        'Hotel Pick up: Please wait Hotel Lobby (or) Drive-way (or) Pickup Point as advised by the driver partner',
        'Cancellation Policy',
        '100% return.',
        'Refund 1 day(s) before visit date.'
      ],
      termsConditions: [
        'Important Information',
        'Ticket valid on the selected transfer date.',
        'In the event the pre-booked vehicle type is NOT suitable (seat capacity, traveling with Infant & Child) for the total arrived passengers on the day of transfer, we will propose to upgrade the vehicle for an additional charges to be paid by the passenger (or) allow the passenger to book their own additional transportation to accommodate the excess passenger.',
        'Under the Road Traffic Act (Chapter 276, Clause 8), a passenger below 1.35 meters in height to be properly secured by approved child restraint, etc. This rule shall NOT apply in relation to any public taxi, if the person below 1.35 meters in height is a rear seat passenger of the public taxi.',
        'After 10-minutes FREE waiting time for Return / Local Transfers, along with any additional grace time offered by the driver partner, EXTENDED Waiting Time charges apply. (refer to the “Add-Ons and Surcharges” section for details)',
        'Extended or Additional Waiting Time charges will be charged after the FREE waiting time + any allowed grace period by the driver partner SGD15 for every block of 15-minutes for all transfers services.',
        'Guest are requested to wait at the Waiting Point/Pickup Point, Hotel Lobby or Hotel Driveway'
      ]
    },
    'Coach (35 Seater)': {
      seatingCapacity: '35 Pax',
      importantInformation: [
        'For Hotel or Local Transfers, 10-minutes FREE waiting time is offered from the pick up time',
        'Please meet the driver in the Driveway OR in lobby Or in the Pickup Point as advised by the driver.'
      ],
      exclusions: [
        'Add-Ons and Surcharges are NOT INCLUDED for this product/ticket and have to be purchased separately to supplement the product/ticket.',
        [
          'Infant Seat Add-On is applicable only for SEDAN, SUV, MPV, MINIVAN and LUXURY vehicle types.',
          'Child Booster Seat Add-On is applicable only for SEDAN, SUV, MPV, MINIVAN and LUXURY vehicle types.',
          'Additional Stops (optional)',
          'Late-Hour/Mid-Night/Early-Morning Surcharges apply by default from 2200 Hours till 0730 Hours for all vehicle types.',
          'Out-Of-City Surcharges apply for pick-up or drop-off points outside the Airport and City Hotels',
          'Holiday & Special Events Surcharges apply by default for English New Year, Chinese New Year, Christmas, F1 Night Race and Singapore Air Shows dates for all vehicle types.'
        ]
      ],
      validity: 'Valid on visit date',
      howToUse: [
        'Hotel Pick up: Please wait Hotel Lobby (or) Drive-way (or) Pickup Point as advised by the driver partner',
        'Cancellation Policy',
        '100% return.',
        'Refund 1 day(s) before visit date.'
      ],
      termsConditions: [
        'Important Information',
        'Ticket valid on the selected transfer date.',
        'In the event the pre-booked vehicle type is NOT suitable (seat capacity, traveling with Infant & Child) for the total arrived passengers on the day of transfer, we will propose to upgrade the vehicle for an additional charges to be paid by the passenger (or) allow the passenger to book their own additional transportation to accommodate the excess passenger.',
        'Under the Road Traffic Act (Chapter 276, Clause 8), a passenger below 1.35 meters in height to be properly secured by approved child restraint, etc. This rule shall NOT apply in relation to any public taxi, if the person below 1.35 meters in height is a rear seat passenger of the public taxi.',
        'After 10-minutes FREE waiting time for Return / Local Transfers, along with any additional grace time offered by the driver partner, EXTENDED Waiting Time charges apply. (refer to the “Add-Ons and Surcharges” section for details)',
        'Extended or Additional Waiting Time charges will be charged after the FREE waiting time + any allowed grace period by the driver partner SGD15 for every block of 15-minutes for all transfers services.',
        'Guest are requested to wait at the Waiting Point/Pickup Point, Hotel Lobby or Hotel Driveway'
      ]
    },
    'Coach (45 Seater)': {
      seatingCapacity: '45 Pax',
      importantInformation: [
        'For Hotel or Local Transfers, 10-minutes FREE waiting time is offered from the pick up time',
        'Please meet the driver in the Driveway OR in lobby Or in the Pickup Point as advised by the driver.'
      ],
      exclusions: [
        'Add-Ons and Surcharges are NOT INCLUDED for this product/ticket and have to be purchased separately to supplement the product/ticket.',
        [
          'Infant Seat Add-On is applicable only for SEDAN, SUV, MPV, MINIVAN and LUXURY vehicle types.',
          'Child Booster Seat Add-On is applicable only for SEDAN, SUV, MPV, MINIVAN and LUXURY vehicle types.',
          'Additional Stops (optional)',
          'Late-Hour/Mid-Night/Early-Morning Surcharges apply by default from 2200 Hours till 0730 Hours for all vehicle types.',
          'Out-Of-City Surcharges apply for pick-up or drop-off points outside the Airport and City Hotels',
          'Holiday & Special Events Surcharges apply by default for English New Year, Chinese New Year, Christmas, F1 Night Race and Singapore Air Shows dates for all vehicle types.'
        ]
      ],
      validity: 'Valid on visit date',
      howToUse: [
        'Hotel Pick up: Please wait Hotel Lobby (or) Drive-way (or) Pickup Point as advised by the driver partner',
        'Cancellation Policy',
        '100% return.',
        'Refund 1 day(s) before visit date.'
      ],
      termsConditions: [
        'Important Information',
        'Ticket valid on the selected transfer date.',
        'In the event the pre-booked vehicle type is NOT suitable (seat capacity, traveling with Infant & Child) for the total arrived passengers on the day of transfer, we will propose to upgrade the vehicle for an additional charges to be paid by the passenger (or) allow the passenger to book their own additional transportation to accommodate the excess passenger.',
        'Under the Road Traffic Act (Chapter 276, Clause 8), a passenger below 1.35 meters in height to be properly secured by approved child restraint, etc. This rule shall NOT apply in relation to any public taxi, if the person below 1.35 meters in height is a rear seat passenger of the public taxi.',
        'After 10-minutes FREE waiting time for Return / Local Transfers, along with any additional grace time offered by the driver partner, EXTENDED Waiting Time charges apply. (refer to the “Add-Ons and Surcharges” section for details)',
        'Extended or Additional Waiting Time charges will be charged after the FREE waiting time + any allowed grace period by the driver partner SGD15 for every block of 15-minutes for all transfers services.',
        'Guest are requested to wait at the Waiting Point/Pickup Point, Hotel Lobby or Hotel Driveway'
      ]
    },
    
    // Add other vehicles here...
  };

  // Open the modal with vehicle details
  async showVehicleDetails() {
    // this.selectedVehicle = vehicle;
    // this.selectedVehicleDetails = this.vehicles[vehicle];

    const modal = await this.modalController.create({
      component: VehicleDetailsPage,
      componentProps: {
        vehicleDetails: this.selectedVehicleDetails
      },
      presentingElement: await this.modalController.getTop()
    });

    return await modal.present();
  }

  selectedVehicleDetails: any;

  selectVehicle(vehicle: string) {
    this.selectedVehicle = vehicle;
    this.selectedVehicleDetails = this.vehicles[vehicle];
    console.log('Selected Vehicle:', vehicle);
  }

  vehicleInfo(){}

  addToCart(vehicleKey: string) {
    this.selectedVehicle = vehicleKey;
    this.cartService.addToVehicleCart(this.serviceType, this.selectedVehicle);
    alert(`${vehicleKey} added to cart with service type ${this.serviceType}`);
  }
  
  select() {
    this.router.navigate(['travelcalen']);
  }










  openGallery() {
    this.isGalleryOpen = true;
    this.currentImageIndex = 0; 
  }

  showNextImage() {
    if (this.currentImageIndex < this.images.length - 1) {
      this.currentImageIndex++;
    }
  }

  showPreviousImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  
}




