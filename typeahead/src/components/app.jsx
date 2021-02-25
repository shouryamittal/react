import React from 'react';
import SearchBar from './searchbar';
import Suggestions from './suggestions';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            suggestions:[],
            text:''
        }

        this.updateSugg = this.updateSugg.bind(this);
        this.updateSelState = this.updateSelState.bind(this);
    }

    updateSugg(suggestions, value) {
        this.setState({
			suggestions : suggestions,
			text: value
        });
        
    }

    updateSelState(selState) {
        this.setState({
			text:selState,
			suggestions:[]
        });
    }

    render() {

        const cityNames = [
            'Adilabad',
			'Anantapur',
			'Chittoor',
			'Kakinada',
			'Guntur',
			'Hyderabad',
			'Karimnagar',
			'Khammam',
			'Krishna',
			'Kurnool',
			'Mahbubnagar',
			'Medak',
			'Nalgonda',
			'Nizamabad',
			'Ongole',
			'Hyderabad',
			'Srikakulam',
			'Nellore',
			'Visakhapatnam',
			'Vizianagaram',
			'Warangal',
			'Eluru',
            'Kadapa',
            'Anjaw',
			'Changlang',
			'East Siang',
			'Kurung Kumey',
			'Lohit',
			'Lower Dibang Valley',
			'Lower Subansiri',
			'Papum Pare',
			'Tawang',
			'Tirap',
			'Dibang Valley',
			'Upper Siang',
			'Upper Subansiri',
			'West Kameng',
            'West Siang',
            'Baksa',
			'Barpeta',
			'Bongaigaon',
			'Cachar',
			'Chirang',
			'Darrang',
			'Dhemaji',
			'Dima Hasao',
			'Dhubri',
			'Dibrugarh',
			'Goalpara',
			'Golaghat',
			'Hailakandi',
			'Jorhat',
			'Kamrup',
			'Kamrup Metropolitan',
			'Karbi Anglong',
			'Karimganj',
			'Kokrajhar',
			'Lakhimpur',
			'Marigaon',
			'Nagaon',
			'Nalbari',
			'Sibsagar',
			'Sonitpur',
			'Tinsukia',
            'Udalguri',
            'Araria',
			'Arwal',
			'Aurangabad',
			'Banka',
			'Begusarai',
			'Bhagalpur',
			'Bhojpur',
			'Buxar',
			'Darbhanga',
			'East Champaran',
			'Gaya',
			'Gopalganj',
			'Jamui',
			'Jehanabad',
			'Kaimur',
			'Katihar',
			'Khagaria',
			'Kishanganj',
			'Lakhisarai',
			'Madhepura',
			'Madhubani',
			'Munger',
			'Muzaffarpur',
			'Nalanda',
			'Nawada',
			'Patna',
			'Purnia',
			'Rohtas',
			'Saharsa',
			'Samastipur',
			'Saran',
			'Sheikhpura',
			'Sheohar',
			'Sitamarhi',
			'Siwan',
			'Supaul',
			'Vaishali',
			'West Champaran',
			'Chandigarh',
        ];

        return(
            <div className="app">
                <SearchBar cityNames={cityNames} text = {this.state.text} update={this.updateSugg}/>
                <Suggestions suggestions={this.state.suggestions} update={this.updateSelState}/>
            </div>
        );
    }
}

export default App;