import { observable, action, decorate } from 'mobx';

import PublicationsAPI from '../components/API/Publications.json';


class Store {
    //nav and contact
    navTogglerVisible = false;
    isContactVisible = false;
    dropDownSize = 0;
    toggleNav = (e) => {e.preventDefault(); this.navTogglerVisible = !this.navTogglerVisible};
    closeToggler = () => this.navTogglerVisible = false;
    showContact = (newStatus) => this.isContactVisible = newStatus;
    //filtered publications
    filteredPublications = [...PublicationsAPI];
    applyFilters = (filteredResults) => this.filteredPublications = filteredResults;
}    

decorate(Store, {
    //nav and contact
    navTogglerVisible: observable,
    isContactVisible: observable,
    closeToggler: action,
    toggleNav: action,
    showContact: action,
    //filtered publications
    filteredPublications: observable,
    applyFilters: action,
});

export default new Store();

