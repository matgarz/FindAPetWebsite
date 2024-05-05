const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
const port = 5259
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
	secret:'broski',
	resave: false,
	saveUninitialized: true,
}));



// Set up EJS for templating
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    // HTML content to be passed to the template
    const html = `
        <div class="card">
            <img src="../imgs/dog_jet.jpg" alt="Card image">
            <div class="card-content">
                <h2 class="card-title">First Class Dogs</h2>
                <p class="card-text">Our dogs are the best in the nation. They are classy</p>
            </div>
        </div>

        <div class="card">
            <img src="../imgs/rescuedpets.jpg" alt="Card image">
            <div class="card-content">
                <h2 class="card-title">Who Are We?</h2>
                <p class="card-text">We are an animal rescue organization dedicated to finding forever homes for all of our rescues.</p>
            </div>
        </div>

        <div class="card">
            <img src="../imgs/cat_pizza.jpg" alt="Card image">
            <div class="card-content">
                <h2 class="card-title">Party Cats</h2>
                <p class="card-text">Our cats love companion. You will be lucky to get a social cat like ours</p>
            </div>
        </div>
    `;

    // CSS styles to be included with the HTML content
    const css = `
        <style>
            #homelink {
                background-color: yellowgreen;
            }
        </style>
    `;

    // Combine HTML content and CSS styles

    // Render the template and pass combined content as a variable
    res.render('page.ejs', { pageTitle: 'Home', content: html,style:css, script:'//' });
});

app.get('/dogcare',(req,res)=>{
    const html=`<div class="card">
    <img src="../imgs/dogspa.jpg" alt="Card image">
    <div class="card-content">
      <h2 class="card-title">Dog Care According to PETA</h2>
      <p class="card-text">Here's a link of an article from PETA.org explaining <a href="https://www.peta.org/living/animal-companions/caring-dogs/">dog care</a></p>
    </div>
  </div>

  <div class="card">
    <img src="../imgs/happydog.jpg" alt="Card image">
    <div class="card-content">
      <h2 class="card-title">Dog Care According to ASPCA</h2>
      <p class="card-text">Here's a link of an article from ASPCA.org explaining <a href="https://aspca.org/pet-care/dog-care">dog care</a></p>
    </div>
  </div>`;
  const css =`
  <style>
            #dogcarelink {
                background-color: yellowgreen;
            }
        </style>`
res.render('page', { pageTitle: 'Dog Care', content: html,style:css,script:'//' });
    });


app.get('/contactus', (req, res) => {
    const html=`
    <div class="card">
    <img src="../imgs/snow.jpg" alt="Card image">
    <div class="card-content">
      <h2 class="card-title">Contact</h2>
      <p class="card-text">
        Name: Mateo Garzon <br><br>
        Email: mathewgarzon2001@gmail.com<br><br>
        Student ID: 40277001 <br><br>
        Program: BEng Software Engineering Co-op
      </p>
    </div>
  </div>`
  const css=`
<style>
  #contactlink{
    background-color: yellowgreen;
  }
</style>`
    res.render('page', { pageTitle: 'Contact Us', content: html,style:css,script:'//' });
    });

app.get('/catcare',(req,res)=>{
    const html=`
    <div class="card">
    <img src="../imgs/catnap.jpg" alt="Card image">
    <div class="card-content">
      <h2 class="card-title">Cat Care According to ASPCA</h2>
      <p class="card-text">Here's a link of an article from ASPCA.org explaining <a href="https://www.aspca.org/pet-care/cat-care">cat care</a></p>
    </div>
  </div>

  <div class="card">
    <img src="../imgs/happycat.jpg" alt="Card image">
    <div class="card-content">
      <h2 class="card-title">Cat Care According to PETA</h2>
      <p class="card-text">Here's a link of an article from PETA.org explaining <a href="https://www.peta.org/living/animal-companions/caring-animal-companions/caring-cats/">cat care</a></p>
    </div>
  </div>`;
    const css=`
<style>
    #catcare{
        background-color: yellowgreen;
    }
</style>`;
    res.render('page', { pageTitle: 'Cat Care', content: html,style:css,script:'//' });
});

app.get('/findpet',(req,res)=>{
    const html=`
    <div class="card">
    
    <form class="form" method="POST"  action="/find-pet">
      <fieldset>
        <legend>Find Your Pet</legend>
        
            
            <p>
            <label for="species">What animal would you like?</label>
            <select name="species" id="species">
                <option>Cat</option>
                <option>Dog</option>
               
            </select>
            </p>
            <p>
              <label for="dog-breed">What dog breed would you like? (if dog):</label>
              <select name="dog-breed" id="dog-breed">
                  <option>Golden Retriever</option>
                  <option>German Shepard</option>
                  <option>Huskey</option>
                  <option>Bulldog</option>
                  <option>Doesn't Matter</option>
              </select>
              </p>
            
            <label for="cat-breed">What cat breed would you like? (if cat)</label>
            <select name="dog-breed" id="cat-breed">
                <option>Ragdoll</option>
                <option>Siamese</option>
                <option>Birman</option>
                <option>Doesn't matter</option>
            </select>
            <br>
            <label for="gender" >What gender would you like?</label>
            <select name="gender" id="gender" >
                <option>Male</option>
                <option>Female</option>
                <option>Doesn't matter</option>
            </select>
            <br>
            <label for="age">What age would you like (years)?</label>
            <select name="age" id="age">
                <option>0-3</option>
                <option>4-6</option>
                <option>7 and up</option>
            </select>
            <br>
              It should get along with:
              <br>
              <br>

              <input type="checkbox" id="dogs">
              <label for="dogs" >Dogs</label>
              <br><br>
              <input type="checkbox" id="cats">
              <label for="cats">Cats</label>
              <br><br>
              <input type="checkbox" id="children">
              <label for="children">Small Children</label>

              <p>
                <label for="comments">Any comments?</label>
                <textarea  id="comments" name="comments"></textarea>
              </p>

    </fieldset>
    <p>
      Thank you for taking the time to fill out our survey!
      <br><br>
      <input type="submit">
      <input type="reset">
  </p>
    </form>

</div>
    `;
    const css=
`<style>
    #findpetlink{
        background-color: yellowgreen;
   }
    </style>`;
    res.render('page', { pageTitle: 'Find Pet', content: html,style:css, script:'//' });
});

app.post('/login-action',(req,res)=>{
	
	
		const {username,password}=req.body;
		fs.readFile('credentials.txt','utf8',(err,data)=>{
		if(err){
		  console.error('Error reading credentials:',err);
		  res.status(500).send('Error reading credentials');
		  return;
		}
		const credentialsArray =data.trim().split('\n');
		const userCredentials =credentialsArray.find(cred=>{
			const [storedUsername,storedPassword]=cred.split(':');
			return username ===storedUsername && password === storedPassword;		});
		if(userCredentials){
		req.session.username=req.body.username;
		  res.redirect('/profile');
		}else{
		  res.redirect('/register');
		}

});
});
app.get('/login',(req,res)=>{
 const html=`
 <div class="card">
<form class="form" id="loginForm" method="POST" action="/login-action">
    <fieldset>
      <legend>Log In</legend>
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" >
    </div>
    <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" >
    </div>
</fieldset>
<p id="logout">
  <br><br>
  <input type="submit" value="log in">
  <input type="reset">
</p>
</form>
</div>`;
    const css=`
<style>
    #loginlink{
        background-color: yellowgreen;
    }</style>`;
	const bla = req.session.username && req.session;
	let script='';
	if(bla){
	script=`
	<script>

	document.getElementById("logout").innerHTML+="<a href='/logoff'>log out</a>";</script>`};
    res.render('page', { pageTitle: 'Log In', content: html,style:css,script:script });
});
app.get('/register', (req,res)=>{
    const html=`
    <div class="card">
    <form class="form" onsubmit="return vld()" id="registerForm" method="POST" action="/register-action">
        <fieldset>
          <legend>Register</legend>
          <div>
            <label for="username">Username:</label>
            <input type="text" id="usernamer" name="username" required>
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="passwordr" name="password" required>
        </div>
    </fieldset>
    <p>
      <br><br>
      <input type="submit" value="register">
      <input  type="reset">
    </p>
    </form>
	<p id="errorMessage"> </p>
    </div>`;
	const script=
       `<script>
		function vld(){
		let errorMessageElement=document.getElementById("errorMessage");
		const usernameRegex = /^[a-zA-Z0-9]+$/;
		const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{4,}$/;
		let username = document.getElementById("usernamer").value;
		let password = document.getElementById("passwordr").value;
		let errorMessage = '';
		if(!passwordRegex.test(password)){

		errorMessage += 		"Password must have:"+
						"\n-more than 4 characters"+
						"\n-only characters and digits"+
						"\n-at least 1 letter and 1 digit";
		}
		if(!usernameRegex.test(username)){
			errorMessage +="Username must have only characters and digits";
		}

		errorMessageElement.textContent=errorMessage;
		return errorMessage==='';
}

		</script>`
		;
    res.render('page', { pageTitle: 'Register', content: html,style:'',script:script });
});

app.get('/privacy', (req,res)=>{
    const html=`
    <div class="card">
    <img src="../imgs/happyface.png" alt="Card image">
    <div class="card-content">
      <h2 class="card-title">Privacy/Disclaimer Statement</h2>
      <p class="card-text">
        Your information is safe with us!<br><br>
        It's not sold to any third parties<br><br>
        The forms you fill out come directly to us!<br><br>
        Every detail is exclusively for the adoption process.

      </p>
    </div>
</div>`;
    
    res.render('page', { pageTitle: 'Privacy', content: html, script:'//', style:'//' });
});

app.get('/profile',(req,res)=>{
    const html=`
    <div class="card">
            <img src="../imgs/cat_pizza.jpg" alt="Card image">
            <div class="card-content">
              <h2 class="card-title">User Profile</h2>
              <p class="card-text" id="bro"> </p>
              <br><br>
              <a href="/logoff">Log off</a>
            </div>
    </div>`;
    const script=`
    <script>
    let data;
    let profile = req.session.user;
    document.getElementById("bro").textContent="Welcome "+profile+" :)";
            window.onload = () => {
                fetch('/profile')
                    .then(response => response.text())
                    .then(data => {
                        document.getElementById('welcomeMessage').textContent = data;
                    });
            };</script>`;
    res.render('page', { pageTitle: 'Profile', content: html, script:script, style:'//' });
});

app.get('/give',(req,res)=>{
    const html=`
    <div class="card">
    <form class="form" id="giveForm" method="POST" action="/submit-pet">
      <fieldset>
        <legend>Have a Pet to Give?</legend>
            <p>
            <label for="species">What species is it?</label>
            <select name="species" id="species" >
                <option>Cat</option>
                <option>Dog</option>
               
            </select>
            </p>
            <p>
              <label for="dog-breed">What dog breed is it? (if dog):</label>
              <input type="text" id="dog-breed" name="dog-breed">
              </p>
            <p>
            <label for="cat-breed">What cat breed is it? (if cat)</label>
            <input type="text" id="cat-breed" name="cat-breed">
	    <br>
	    <label for="age">age</label>
	    <input type="number" id="age" name="age">
            <br><br>
            <label for="gender">What gender is it?</label>
            <select name="gender" id="gender">
                <option>Male</option>
                <option>Female</option>
            </select>
            <p>
              It gets along with:
              <br>
              <br>
              <input type="checkbox" id="dogs">
              <label for="dogs">Dogs</label>
              <br>
              <input type="checkbox" id="cats">
              <label for="cats">Cats</label>
              <br>
              <input type="checkbox" id="children">
              <label for="children">Small Children</label>
              <br>
            </p>

            <p>
              <label for="comments">Any comments?</label>
              
              <textarea  id="comments" name="comments"></textarea>
            </p>
            
            <p>
              Current owner's info:
              <br><br>
              <label for="FN">First Name:</label> 
              <input type="text" id="FN" name="FN">
              
              <br><br>
              <label for="LN">Last Name:</label>
              <input type="text" id="LN" name="LN">
              <br><br>
              <label for="email">Email Address:</label>
              <input type="text" id="email" name="email">
            </p>

            
        
        
        
    </fieldset>
    <p>
      <br><br>
      <input type="submit" onclick="bro()">
      <input type="reset">
  </p>
</form>
 
</div>`;
    const css=`
    #givelink{
        background-color: yellowgreen;
      }`;
  const script=`
<script>
  function bro(){
  let a = document.getElementById("dog-breed").value;
  let b = document.getElementById("cat-breed").value;
  let c = document.getElementById("dogs").checked;
  let d = document.getElementById("cats").checked;
  let e = document.getElementById("children").checked;
  let x = document.getElementById("FN").value;
  let y = document.getElementById("LN").value;
  let z = document.getElementById("email").value  
                                                                                                                                                                                                                                                        ;
  if(a==="" || b==="")
    alert("Fill up all fields");
  if(!c && !d && !e)
    alert("check at least one field for who the pet gets along with")
  if (x ==="" || y ==="" || z ==="")
    alert("All fields must be filled up.");
  if(!isValidEmail(z))
    alert("email is not valid");
  }
  function isValidEmail(email) {
      // Regular expression to check if email is valid
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  
 <script> `;
  const username =req.session &&  req.session.username;
    if (username!=undefined) {
        res.render('page', { pageTitle: 'Give', content: html, style:css, script:script });
    } else {
      res.redirect('/register');
    }
    
});

app.use(cookieParser());
app.use(
  express.json(),
  express.urlencoded({
    extended: true,
  })
);





app.use(express.static(path.join(__dirname, 'public')));



// Route to handle registration form submission
app.post('/register-action', (req, res) => {
    const{username,password} =req.body;
    if(!username || !password){
	res.status(400).send('Username and password are required.');
	return;
    }
    fs.readFile('credentials.txt','utf8',(err,data)=>{
	if(err && err.code !== 'ENOENT'){
	console.error('Error reading credentials:',err);
	res.status(500).send('Error reading credentials:');
	return;
	}
	const existingCredentials = data || '';
	const credentialsArray = existingCredentials.trim().split('\n');
	const userExists = credentialsArray.some(cred=>cred.split(':')[0] === username);
	if(userExists){
	res.status(400).send('User already exists.');
	return;
	}
	const newCredentials = `${username}:${password}\n`;
	fs.appendFile('credentials.txt',newCredentials,(err)=>{
	if(err){
	console.error('Error saving credentials:',err);
	res.status(500).send('Error saving credentials.');
	return;
	}
	console.log('Credentials saved succesfully.');
	});
	res.redirect('/login');
    });
});




app.get('/logoff', (req, res) => {
    req.session.destroy(err => {
        if(err) {
            return res.send('Error in ending session');
        }
        res.send('Session ended.');
    });
});




let submissionNumber = 1; // Initialize submissionNumber

// Read existing pet data from the file and set submissionNumber accordingly
function initializeSubmissionNumber() {
    try {
        const data = fs.readFileSync('pets.txt', 'utf8');
        const pets = data.trim().split('\n');
        submissionNumber = pets.length + 1;
        console.log('Submission number initialized to:', submissionNumber);
    } catch (err) {
        console.error('Error initializing submission number:', err);
    }
}

// Call the function to initialize submissionNumber
initializeSubmissionNumber();

app.post('/submit-pet', (req, res) => {
    if (!req.session.username) {

        // Redirect the user to the login page
        return res.redirect('/login');
    }
    const { species, breed, age, gender, dogs, cats, children, comments, firstName, lastName, email } = req.body;
	const apet=`${submissionNumber}:${req.session.username}:${species}:${breed}:${age}:${gender}:${dogs}:${cats}:${children}\n`;    
    // Construct the pet object based on the submitted data
     fs.appendFile('pets.txt',apet,(err)=>{
	if(err){
	console.error('Error saving credentials:',err);
	res.status(500).send('Error savind credentials.');
	return;}
	console.log('Credentials saved succesfuly.');});
    // Increment submissionNumber for the next submission
    submissionNumber++;

    // Process the pet submission (e.g., store in a database)
});

app.post('/find-pet', (req, res) => {
    let petlist =[];
    const { species, dogBreed, catBreed, age, gender, dogs, cats, children } = req.body;
	fs.readFile('pets.txt','utf8',(err,data)=>{
	if(err){
	console.error('Error saving credentials:',err);
	res.status(500).send('Error savind credentials.');
	return;}
	const lines = data.trim().split('\n');
	console.log('Credentials saved succesfuly.');
	lines.forEach(line=>{
	const [species,breed, age, gender, dogs, cats,children] =line.split(':').splice(0,2);
	petlist.push({species,breed, age, gender, dogs, cats,children});
	});
	});

    // Filter available pets based on user criteria
    const matchingPets = petlist.filter(pet => {
        // Check species
        if (species && pet.species.toLowerCase() !== species.toLowerCase()) {
            return false;
        }

        if (species === 'Dog' && dogBreed && pet.breed.toLowerCase() !== dogBreed.toLowerCase()) {
            return false;
        }
        
        if (species === 'Cat' && catBreed && pet.breed.toLowerCase() !== catBreed.toLowerCase()) {
            return false;
        }
        

        // Check age if specified
        if (age) {
            const [minAge, maxAge] = age.split('-');
            const petAge = parseInt(pet.age);
            if ((minAge && petAge < parseInt(minAge)) || (maxAge && petAge > parseInt(maxAge))) {
                return false;
            }
        }

        // Check gender if specified
        if (gender && pet.gender.toLowerCase() !== gender.toLowerCase()) {
            return false;
        }

        // Check compatibility with other animals and children
        if ((dogs && !pet.dogs) || 
            (cats && !pet.cats) || 
            (children && !pet.children)) {
            return false;
        }

        
    });
    let petCardsHTML = ''; // Initialize an empty string to store HTML for pet cards
    let petn = 0;
    // Generate HTML for each pet card using forEach loop
    matchingPets.forEach(pet => {
	petn +=1;
        petCardsHTML += `
        <div class="card">
    <img src="../imgs/catnap.jpg" alt="pet">
    <div class="card-content">
      <h2 class="card-title">Cool Pet #<%- petn %></h2>
      <p class="card-text"> 
        Species: <%- pet.species %> 
        &nbsp;|&nbsp;
        Age: <%- pet.age %> 
        &nbsp;|&nbsp;
        Breed: <%- pet.breed %> 
        &nbsp;|&nbsp;
        Age: <%- pet.age %>
        &nbsp;|&nbsp;
        Gender: <%- pet.gender %>
        &nbsp;|&nbsp;
        Compatibility:
        <% if(pet.dogs){%> 
            Dogs<br> <%}%>
        <%if (pet.cats) {%>  
            Cats<br> <%}%>
        <%if (pet.children) {%>
            Kids <%}%>

        
        
      </p>
    </div>
    </div>`;
        });

    // Render the page with matching pets
    res.render('page', { pageTitle:'Available Pets', pets: matchingPets, content: petCardsHTML, style: '',script:''});
});





// Use express-session for session handling
app.listen(port,()=>{
    console.log(`Server runs on port ${port}`)
});
