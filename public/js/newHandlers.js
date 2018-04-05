const newHandlers = (function(){

	const selectLeg = function(){
		let legId = $(this).attr('legId')
		let leg = store.trips.current.tripLegs.find(leg => leg._id === legId)
		store.trips.currentLeg = leg
		$(this).closest('#tripFullList').find('.legListItem').removeClass('selectedLeg')
		$(this).addClass('selectedLeg')
		legRender.edit()
		userHeader.render()
	}
	const addLegToTrip = function(){
		// this should call api, create new empty leg and display it.

		let tripId = $(this).attr('tripId')
		store.trips.currentLeg = null
		$(this).closest('#tripFullList').find('.legListItem').removeClass('selectedLeg')
		$(this).addClass('selectedLeg')
		userHeader.render()
		legRender.edit()
	}
	const selectTrip = function(){
		store.trips.currentLeg = null
		userHeader.render()
		let tripId = $(this).attr('tripId')
		const trip = store.trips.find(trip=> trip._id === tripId)
		store.trips.current = trip
		tripRender.viewTrip()
	}
	const hoverLeg = function(){
		const legId = $(this).attr('legId')
		const line = store.trips.current.tripLegs.find(leg=> leg._id === legId).line
		line.setOptions(store.mapArrowOptions.selected)
	}
	const unhoverLeg = function(){
		const legId = $(this).attr('legId')
		const line = store.trips.current.tripLegs.find(leg=> leg._id === legId).line
		line.setOptions(store.mapArrowOptions.unSelected) 
	}
	const addNewTrip = function(){
		store.trips.current = null
		tripRender.edit()
	}
	const updateTrip = function(){
		store.trips.current.name = $('#tripName').val()
		handlers.addUpdateTrip()
	}
	const addTrip = function(){
		store.trips.current = {}
		store.trips.current.name = $('#tripName').val()
		handlers.addUpdateTrip()
	}

	return {
		selectLeg,
		addLegToTrip,
		selectTrip,
		hoverLeg,
		unhoverLeg,
		addNewTrip,
		updateTrip,
		addTrip,
	}
})()