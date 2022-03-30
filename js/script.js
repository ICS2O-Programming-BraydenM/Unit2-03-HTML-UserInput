// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Brayden MacMillan
// Created on: Sep 2022
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's first name and age and displays it back to user

  // get street number from textfield
  let streetNumber = document.getElementById("street-number").value
	// get street name from textfield
  let streetName = document.getElementById("street-name").value

  // display street number and name back to user
  document.getElementById('user-info').innerHTML = "Your street number is " + streetNumber + " and your street name is " + streetName + " , thanks for interacting! "
}
