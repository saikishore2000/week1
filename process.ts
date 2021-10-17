class movie {
    name: string;
    director: string;
    release : number;
    rating : number;
    budget: number;

  
    constructor(n: string, d: string, re: number, ra: number, b: number){
      this.name = n;
      this.director = d;
      this.release = re;
      this.rating = ra;
      this.budget = b;
    }
  
    format() {
      return `${this.name} movie directed by £${this.director} and released in ${this.release} with the budget of ${this.budget}M and gained a rating of ${this.rating}`;
    }
  }

  class series {
    name: string;
    director: string;
    release : number;
    rating : number;
    budget: number;

  
    constructor(n: string, d: string, re: number, ra: number, b: number){
      this.name = n;
      this.director = d;
      this.release = re;
      this.rating = ra;
      this.budget = b;
    }
  
    format() {
      return `${this.name} series directed by £${this.director} and released in ${this.release} with the budget of ${this.budget}M and gained a rating of ${this.rating}`;
    }
  }
  class shows {
    name: string;
    director: string;
    release : number;
    rating : number;
    budget: number;

  
    constructor(n: string, d: string, re: number, ra: number, b: number){
      this.name = n;
      this.director = d;
      this.release = re;
      this.rating = ra;
      this.budget = b;
    }
  
    format() {
      return `${this.name} show directed by £${this.director} and released in ${this.release} with the budget of ${this.budget}M and gained a rating of ${this.rating}`;
    }
  }
  class documentry {
    name: string;
    director: string;
    release : number;
    rating : number;
    budget: number;

  
    constructor(n: string, d: string, re: number, ra: number, b: number){
      this.name = n;
      this.director = d;
      this.release = re;
      this.rating = ra;
      this.budget = b;
    }
  
    format() {
      return `${this.name} directed by £${this.director} and released in ${this.release} with the budget of ${this.budget}M and gained a rating of ${this.rating}`;
    }
  }

  
  
  const form = document.querySelector('.new-form') as HTMLFormElement;
  // inputs
  const type = document.querySelector('#type') as HTMLInputElement;
  const namme = document.querySelector('#name') as HTMLInputElement;
  const director = document.querySelector('#director') as HTMLInputElement;
  const release = document.querySelector('#release') as HTMLInputElement;
  const budget = document.querySelector('#budget') as HTMLInputElement;
  const rating = document.querySelector('#rating') as HTMLInputElement;
  
  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
  
    console.log(
      type.value, 
      namme.value, 
      director.value,
      release.value,
      budget.value, 
      rating.valueAsNumber
    );
  });
