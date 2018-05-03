import {Cars} from './Cars';

export class DataService {

  private data: Cars[] = <any>[
    {name: 'assets/images/car1.jpg', speed: '285mph', Production: 2018, price: '20000$'},
    {name: 'assets/images/car2.jpeg', speed: '250mph', Production: 2017, price: '40000$'},
    {name: 'assets/images/car3.jpg', speed: '300mph', Production: 2014, price: '30000$'},
    {name: 'assets/images/car4.png', speed: '180mph', Production: 2015, price: '77000$'},
    {name: 'assets/images/car5.png', speed: '230mph', Production: 2010, price: '52000$'},
    {name: 'assets/images/bmw1.png', speed: '280mph', Production: 2015, price: '90000$'},
    {name: 'assets/images/bmw2.jpeg', speed: '300mph', Production: 2009, price: '65000$'},
    {name: 'assets/images/bmw3.jpg', speed: '199mph', Production: 2015, price: '20000$'},
    {name: 'assets/images/bmw4.jpg', speed: '299mph', Production: 2016, price: '20000$'},
    {name: 'assets/images/bmw5.jpg', speed: '325mph', Production: 2015, price: '20000$'},
  ];
  getData(): Cars[] {
    return this.data;
  }

}
