// NON MODIFICARE QUESTO ARRAY!

const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]


//---------------------------------------------------------------------------------------
// //AGGIUNGERE WINDOW.LOAD
//DEFINISCO COSTANTE PER NODO INPUT RICERCA lavORO
const jobQuery = document.querySelector('#jobInput')

//DEFINISCO COSTANTE PER NODO INPUT RICERCA POSIZIONE GEOGRAFICA
const locationQuery= document.querySelector('#locationInput')



function search(jobQuery, locationQuery) {

  let result = []
  let count = 0

  let output = document.querySelector('#output')


  if (output) {
    output.remove()
  } else if( jobInput.value === '' && locationInput.value ===''){
    return result 

  }



  const jobQueryLowerCase = jobQuery.toLowerCase()
  const locationQueryLowerCase = locationQuery.toLowerCase()

  for (const job of jobs) {

    if (job.title.toLowerCase().includes(jobQueryLowerCase) && job.location.toLowerCase().includes(locationQueryLowerCase)) {

      result.push(job)
    } 
  } return {
    result,
    count: result.length
  }
}


//----------FUNZIONE PER CREARE HTML------------------
function showResult(jobQuery, locationQuery) {

  const data = search(jobQuery, locationQuery)
  let output = document.querySelector('#output')


  //CREO NUOVO DIV PER I RISULTATI
  let newDiv = document.createElement('div')
  newDiv.id = 'output'
  let body = document.querySelector('body')
  body.appendChild(newDiv)

  //CREO TITOLO 
  let newDivTitle = document.createElement('h3')
  newDiv.appendChild(newDivTitle)
  newDivTitle.innerText = 'Risultati della ricerca:'

  //CREO LISTA
  let newUl = document.createElement('ul')
  let divResult = document.querySelector('#output')
  divResult.appendChild(newUl)
  //-----------------------------------------------------
  //CREO HTML PER VISUALIZZARE IL COUNT
  let newH4 = document.createElement('h4')
  newUl.appendChild(newH4)
  newH4.id = 'result-number'

  newH4.textContent = ' Risultati trovati: ' + data.count
  //----------------------------------------------------

  for (const showResult of data.result) {
    
    if(jobInput.value==='' && locationInput.value === ''){
      
    }

    let newLi = document.createElement('li')
    newLi.classList.add = 'list'
    newUl.appendChild(newLi)

    newLi.textContent = 'Posizione lavorativa: ' + showResult.title + '. Luogo: ' + showResult.location
  } 
}


