class Storage {
  ACTIVETRIP() {
    return 'ACTIVE-TRIP';
  }
  ALLTRIPSNAME() {
    return 'ALL-TRIPS-ARRAY';
  }
  DEFAULTSTATEABBREVIATION() {
    return 'DEFAULT-STATE-ABBREVIATION';
  }
  DEFAULTSTATEPROPERTY() {
    return '_DEFAULT_STATE';
  }
  STATEBASEDATA() {
    let stateData = [
      { "abbreviation": "AL", "state": "Alabama", "capital": "Montgomery", "found": 0 },
      { "abbreviation": "AK", "state": "Alaska", "capital": "Juneau", "found": 0 },
      { "abbreviation": "AZ", "state": "Arizona", "capital": "Phoenix", "found": 0 },
      { "abbreviation": "AR", "state": "Arkansas", "capital": "Little Rock", "found": 0 },
      { "abbreviation": "CA", "state": "California", "capital": "Sacramento", "found": 0 },
      { "abbreviation": "CO", "state": "Colorado", "capital": "Denver", "found": 0 },
      { "abbreviation": "CT", "state": "Connecticut", "capital": "Hartford", "found": 0 },
      { "abbreviation": "DE", "state": "Delaware", "capital": "Dover", "found": 0 },
      { "abbreviation": "FL", "state": "Florida", "capital": "Tallahassee", "found": 0 },
      { "abbreviation": "GA", "state": "Georgia", "capital": "Atlanta", "found": 0 },
      { "abbreviation": "HI", "state": "Hawaii", "capital": "Honolulu", "found": 0 },
      { "abbreviation": "ID", "state": "Idaho", "capital": "Boise", "found": 0 },
      { "abbreviation": "IL", "state": "Illinois", "capital": "Springfield", "found": 0 },
      { "abbreviation": "IN", "state": "Indiana", "capital": "Indianapolis", "found": 0 },
      { "abbreviation": "IA", "state": "Iowa", "capital": "Des Moines", "found": 0 },
      { "abbreviation": "KS", "state": "Kansas", "capital": "Topeka", "found": 0 },
      { "abbreviation": "KY", "state": "Kentucky", "capital": "Frankfort", "found": 0 },
      { "abbreviation": "LA", "state": "Louisiana", "capital": "Baton Rouge", "found": 0 },
      { "abbreviation": "ME", "state": "Maine", "capital": "Augusta", "found": 0 },
      { "abbreviation": "MD", "state": "Maryland", "capital": "Annapolis", "found": 0 },
      { "abbreviation": "MA", "state": "Massachusetts", "capital": "Boston", "found": 0 },
      { "abbreviation": "MI", "state": "Michigan", "capital": "Lansing", "found": 0 },
      { "abbreviation": "MN", "state": "Minnesota", "capital": "Saint Paul", "found": 0 },
      { "abbreviation": "MS", "state": "Mississippi", "capital": "Jackson", "found": 0 },
      { "abbreviation": "MO", "state": "Missouri", "capital": "Jefferson City", "found": 0 },
      { "abbreviation": "MT", "state": "Montana", "capital": "Helena", "found": 0 },
      { "abbreviation": "NE", "state": "Nebraska", "capital": "Lincoln", "found": 0 },
      { "abbreviation": "NV", "state": "Nevada", "capital": "Carson City", "found": 0 },
      { "abbreviation": "NH", "state": "New Hampshire", "capital": "Concord", "found": 0 },
      { "abbreviation": "NJ", "state": "New Jersey", "capital": "Trenton", "found": 0 },
      { "abbreviation": "NM", "state": "New Mexico", "capital": "Santa Fe", "found": 0 },
      { "abbreviation": "NY", "state": "New York", "capital": "Albany", "found": 0 },
      { "abbreviation": "NC", "state": "North Carolina", "capital": "Raleigh", "found": 0 },
      { "abbreviation": "ND", "state": "North Dakota", "capital": "Bismarck", "found": 0 },
      { "abbreviation": "OH", "state": "Ohio", "capital": "Columbus", "found": 0 },
      { "abbreviation": "OK", "state": "Oklahoma", "capital": "Oklahoma City", "found": 0 },
      { "abbreviation": "OR", "state": "Oregon", "capital": "Salem", "found": 0 },
      { "abbreviation": "PA", "state": "Pennsylvania", "capital": "Harrisburg", "found": 0 },
      { "abbreviation": "RI", "state": "Rhode Island", "capital": "Providence", "found": 0 },
      { "abbreviation": "SC", "state": "South Carolina", "capital": "Columbia", "found": 0 },
      { "abbreviation": "SD", "state": "South Dakota", "capital": "Pierre", "found": 0 },
      { "abbreviation": "TN", "state": "Tennessee", "capital": "Nashville", "found": 0 },
      { "abbreviation": "TX", "state": "Texas", "capital": "Austin", "found": 0 },
      { "abbreviation": "USA", "state": "United States", "capital": "District of Columbia", "found": 0 },
      { "abbreviation": "UT", "state": "Utah", "capital": "Salt Lake City", "found": 0 },
      { "abbreviation": "VT", "state": "Vermont", "capital": "Montpelier", "found": 0 },
      { "abbreviation": "VA", "state": "Virginia", "capital": "Richmond", "found": 0 },
      { "abbreviation": "WA", "state": "Washington", "capital": "Olympia", "found": 0 },
      { "abbreviation": "WV", "state": "West Virginia", "capital": "Charleston", "found": 0 },
      { "abbreviation": "WI", "state": "Wisconsin", "capital": "Madison", "found": 0 },
      { "abbreviation": "WY", "state": "Wyoming", "capital": "Cheyenne", "found": 0 }
    ].sort(this.sortCompareState.bind(this));
    return stateData;
  }
  TRIPBASEDATA() {
    const tripData = {
      "_DEFAULT_STATE": "",
      "AL": 0, "AK": 0, "AZ": 0, "AR": 0, "CA": 0, "CO": 0, "CT": 0, "DE": 0, "FL": 0, "GA": 0,
      "HI": 0, "IA": 0, "ID": 0, "IL": 0, "IN": 0, "KS": 0, "KY": 0, "LA": 0, "ME": 0, "MD": 0,
      "MA": 0, "MI": 0, "MN": 0, "MS": 0, "MO": 0, "MT": 0, "NE": 0, "NV": 0, "NH": 0, "NJ": 0,
      "NM": 0, "NY": 0, "NC": 0, "ND": 0, "OH": 0, "OK": 0, "OR": 0, "PA": 0, "RI": 0, "SC": 0,
      "SD": 0, "TN": 0, "TX": 0, "USA": 0, "UT": 0, "VT": 0, "VA": 0, "WA": 0, "WV": 0, "WI": 0, "WY": 0
    };
    return tripData;
  }

  sortCompareName(a, b) {
    return this.sortCompare(a.name, b.name);
  }
  sortCompareState(a, b) {
    return this.sortCompare(a.state, b.state);
  }

  sortCompare(a, b) {
    const genreA = a.toUpperCase();
    const genreB = b.toUpperCase();
  
    let comparison = 0;
    if (genreA > genreB) {
      comparison = 1;
    } else if (genreA < genreB) {
      comparison = -1;
    }

    return comparison;
  }

  // Simple Item Patterns
  getItem(item) {
    const result = localStorage.getItem(item);
    return (result === null) ? null : JSON.parse(result);
  }
  setItem(item, value) {
    return localStorage.setItem(item, JSON.stringify(value));
  }
  removeItem(item) {
    return localStorage.removeItem(item);
  }

  // Trip Functions
  startTrip(tripName, defaultState) {
    this.addToTrips(tripName);
    
    let tripData = this.TRIPBASEDATA();
    tripData.USA = 0;
    tripData[this.DEFAULTSTATEPROPERTY()] = defaultState;
    this.setItem(tripName, this.TRIPBASEDATA());

    this.setItem(this.DEFAULTSTATEABBREVIATION(), defaultState);
  }
  getDefaultState() {
    return this.getItem(this.DEFAULTSTATEABBREVIATION());
  }
  addToTrips(tripName) {
    const allTripsData = this.getItem(this.ALLTRIPSNAME()) || [];
    allTripsData.push({ name: tripName, min: 0, max: 0, found: 0 });
    this.setItem(this.ALLTRIPSNAME(), allTripsData.sort(this.sortCompareName.bind(this)));
  }
  getAllTrips() {
    let allTrips = this.getItem(this.ALLTRIPSNAME()) || [];
    const defaultState = this.getItem(this.DEFAULTSTATEABBREVIATION);

    for (let trip of allTrips) {
      let max = 0;
      const tripData = this.getItem(trip.name);
      console.log({ trip, tripData });
      if (!tripData.hasOwnProperty('USA')) {
        tripData.USA = 0;
      }
      if (!tripData.hasOwnProperty(this.DEFAULTSTATEPROPERTY())) {
        tripData[this.DEFAULTSTATEPROPERTY()] = defaultState;
      }
      for (let state in tripData) {
        if (state !== this.DEFAULTSTATEPROPERTY()) {
          max += tripData[state];
        }
      }
      trip.max = max;
      this.setItem(trip.name, tripData);
    }
    this.setItem(this.ALLTRIPSNAME(), allTrips);
    return allTrips;
  }
  setActiveTrip(tripName) {
    return this.setItem(this.ACTIVETRIP(), tripName);
  }
  getActiveTrip() {
    let tripData = this.TRIPBASEDATA();
    if (!tripData.hasOwnProperty('USA')) {
      tripData.USA = 0;
    }
    if (!tripData.hasOwnProperty('USA')) {
      tripData[this.DEFAULTSTATEPROPERTY()] = this.getDefaultState();
    }

    return this.getItem(this.ACTIVETRIP());
  }
  deleteTrip(tripName) {
    const allTripsData = this.getItem(this.ALLTRIPSNAME()) || [];
    let newTripsData = [];
    for  (let trip of allTripsData) {
      if (trip.name !== tripName) {
        newTripsData.push(trip);
      }
    }
    newTripsData = newTripsData.sort(this.sortCompareName.bind(this));
    this.setItem(this.ALLTRIPSNAME(), newTripsData);
    this.removeItem(tripName);
  }

  getStateList() {
    return this.STATEBASEDATA();
  }
  getStateData(tripName) {
    const counts = this.getItem(tripName);
    let stateData = this.STATEBASEDATA();

    if (!counts.hasOwnProperty('USA')) {
      counts.USA = 0;
    }
    if (!counts.hasOwnProperty(this.DEFAULTSTATEPROPERTY())) {
      counts[this.DEFAULTSTATEPROPERTY()] = this.getDefaultState();
    }

    for (let state of stateData) {
      if (state.abbreviation !== this.DEFAULTSTATEPROPERTY()) {
        state.found = counts[state.abbreviation];
      }
    }

    return stateData;
  }

  addToState(stateAbbreviation) {
    return this.modifyState(stateAbbreviation, 1);
  }
  removeFromState(stateAbbreviation) {
    return this.modifyState(stateAbbreviation, -1);
  }
  modifyState(stateAbbreviation, value) {
    const trip = this.getActiveTrip();
    const defaultState = this.getDefaultState();
    let allTripsData = this.getItem(this.ALLTRIPSNAME()) || [];

    let tripData = this.getItem(trip);
    if (tripData[stateAbbreviation] + value >= 0) {
      tripData[stateAbbreviation] += value;
    }

    let countFound = 0;
    for (let state in tripData) {
      if (state !== defaultState && tripData[state] > 0) {
        countFound = countFound + 1;
      }
    }

    for (let checkTripData of allTripsData) {
      if (checkTripData.name === trip) {
        checkTripData.found = countFound;
      }
    }
    this.setItem(this.ALLTRIPSNAME(), allTripsData);

    return this.setItem(trip, tripData);
  }
}