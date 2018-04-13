const homeRender = (function() {

	const nav = () => {
		const signedInHtml = `
                <div class="navBarMe">
                    <p class='text-white me'>${store.me && store.me.email}</p>
                    <p class='signOut'><strong><a href='/auth/signout'>SIGN OUT</a></strong></p>
                </div>`
		const navHtml = `
            <a class="navbar-brand" href="/">TripSync</a>
                ${store.me ? signedInHtml : ''}`
		$('.navDiv').html(navHtml)
	}
	const intro = () => {
		const introHtml = `
            <header class='logo'><h1>TripSync</h1></header>
            <h2>group travel made simple</h2>
            <br>
            <div class='openingText'>
            <p>Traveling in a group can be complicated</p>
            <p>With TripSync, it's simple.</p>
            <p>1. Create a Trip and enter itinerary info.</p>
            <p>2. Add or remove travelers from individual legs </p>
            <p>3. Each Traveler can sign in and view their personalized itinerary (coming soon)</p>
			</div>

		`
		$('.leftSide').html(introHtml)
		groupPicture()
	}
	const signInForm = () => {
		const signInHtml = `
		
			<h2>Please Sign In</h2>
			<form class="form-group signInForm" method="POST" action="">
			    <label for="emailInput">Email</label>
			    <input class= "form-control" type="email" id="emailInput" name="email">
			    <br>
			    <label for="passwordInput">Password</label>
			    <input class= "form-control" type="password" id="passwordInput" name="password">
			    <div class='mt-4 d-flex justify-content-around'>
				    <button type='submit' id="signInButton" class="btn-success btn btn-sm">SIGN IN</button>
			    </div>
			</form>
			<div class="signUpButtonDiv">
				<p class='mb-0'>not yet registered?</p>
				<button id="signUpButton" class='btn btn-sm btn-info'>SIGN UP HERE</button>
			</div>
		`
		$('.rightSide').html(signInHtml)
	}
	const groupPicture = () => {
		let html = `<img src='/css/images/tripsyncArt.png'>`
		$('.bottom').html(html)
	}
	const signUpForm = () => {
		const signUpHtml = `
		<h2>Sign Up</h2>
		<form class='signUpForm' action='#' method='POST'>
			<div class='form-group col-md-6'>
				<label for="firstName">First Name</label>
				<input type='firstName' id='firstName' name='firstName' class='form-control' required>
			</div>
			<div class='form-group col-md-6'>
				<label for="lastName">Last Name</label>
				<input type='lastName' id='lastName' name='lastName' class='form-control' required>
			</div>
			<div class='form-group'>
				<label for="email">Email</label>
				<input type='email' id='email' name='email' class='form-control' required>
			</div>
			<div class='form-group'>
				<label for="password">Password</label>
				<input type='password' id='password' name='password' class='form-control' required>
			</div>
			<button type='submit' class='btn btn-success'>SIGN UP</button>
		</form>
		`
		$('.rightSide').html(signUpHtml)
	}
	return {
		nav,
		intro,
		signInForm,
		signUpForm,

	}
})()