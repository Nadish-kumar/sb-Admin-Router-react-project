import React from 'react'
import './Forms.css'

const Forms = () => {
    return (
        <div class="container-fluid">
		<div class="container">
			<div class="formBox">
				<form>
						<div class="row">
							<div class="col-sm-12">
								<h1>Contact form</h1>
							</div>
						</div>

						<div class="row">
							<div class="col-sm-6">
								<div class="inputBox ">
									<div class="inputText">First Name</div>
									<input type="text" name="" class="input" />
								</div>
							</div>

							<div class="col-sm-6">
								<div class="inputBox">
									<div class="inputText">Last Name</div>
									<input type="text" name="" class="input" />
								</div>
							</div>
						</div>
                        <div class="row">
							<div class="col-sm-6">
								<div class="inputBox">
									<div class="inputText">Email</div>
									<input type="text" name="" class="input" />
								</div>
							</div>

							<div class="col-sm-6">
								<div class="inputBox">
									<div class="inputText">Mobile</div>
									<input type="text" name="" class="input" />
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-sm-12">
								<div class="inputBox">
									<div class="inputText">Email</div>
									<textarea class="input"></textarea>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-sm-12">
								<input type="submit" name="" class="button" value="Submit" />
							</div>
						</div>
                        </form>
			</div>
		</div>
	</div>
      
                            


    
    
    
    
    )
}

export default Forms
