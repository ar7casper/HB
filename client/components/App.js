import React from 'react';
import Header from './header/Header';
import People from './people/People';
import Card from './card/Card';
import HiddenGridItem from './common/hiddenGridItem/HiddenGridItem';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            people: null,
            filtered: null,
            cardWidth: 210,
            cardMargin: 10
        };
        
        this.search   = this.search.bind(this);
        this.onResize = this.onResize.bind(this);
    }
    
    componentDidMount() {
        if (!this.state.people) {
            axios.get('https://candidate-test.herokuapp.com/contacts')
                .then(result=> {
                    console.log('result', result);
                    
                    this.setState({
                        people: result.data,
                        originalData: result.data
                    })
                })
                .catch(e => console.log('e', e));
        }
        window.addEventListener('resize', this.onResize);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }
    
    onResize() {
        this.setState({
            winWidth: window.innerWidth
        });
    }
    
    addMissingGridItems() {
        const peopleWidth = this.peopleEl.offsetWidth;
        const cardWidth = this.state.cardWidth;
        const cardMargin = this.state.cardMargin;
        const numOfColumns = Math.trunc(peopleWidth / (cardWidth + cardMargin * 2));
        const remainder = this.state.people.length % numOfColumns;
        const howManyToAdd = remainder > 0 ? numOfColumns - remainder : 0;
        
        const fakeArray = [];
        
        for (let i = 0; i < howManyToAdd; i++) {
            fakeArray.push(null);
        }
        
        return [...this.state.people, ...fakeArray];
    }
    
    search(e) {
        const val            = e.target.value;
        const filteredPeople = val.length === 0 ? this.state.originalData : this.state.people.filter(o => o.name.toLowerCase().indexOf(val) > -1);
        
        this.setState({
            people: filteredPeople
        });
        
    }
    
    render() {
        const people = this.state.people ? this.addMissingGridItems() : this.state.people;
        
        return (
            <div>
                <Header search={this.search}/>
                <People peopleRef={(el) => {
                    this.peopleEl = el;
                }}>
                    {
                        people ?
                            people.map((o, k) => {
                                return (
                                    o !== null ?
                                        <Card
                                            key={k}
                                            cardRef={(el) => {
                                                if (k === 0) {
                                                    this.cardEl = el;
                                                }
                                            }}
                                            width={this.state.cardWidth}
                                            margin={this.state.cardMargin}
                                            job={o.job}
                                            name={o.name}
                                            companyName={o.company_name}
                                            email={o.email}
                                            iconSrc={o.icon}
                                            profileImageSrc={o.profile_image}
                                            phone={o.phone}
                                        /> : <HiddenGridItem extraClass="gridItem card" margin={this.state.cardMargin} key={k}/>
                                )
                            })
                            : null
                    }
                </People>
            </div>
        );
    }
}

export default App;