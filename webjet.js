   $(document).ready(function () {

            $("#showMoviesFromCinemaWorld").click(function () {                                  

                    $.ajax({

                        type: 'GET',

                        url: 'http://webjetapitest.azurewebsites.net/api/cinemaworld/movies',

                        beforeSend: function (xhr) { xhr.setRequestHeader('x-access-token', 'sjd1HfkjU83ksdsm3802k'); },

                        dataType: 'json',

                        async: false,

                        success: function (response) {

                            var trHTML = '<table "card u-clearfix">';                            
                            $.each(response.Movies, function (i, item) {                               
                                trHTML += '<tr><td><img src=' + item.Poster + ' alt="movieimage" class="img-responsive"/></td><td><a id ='+ item.ID +' class="movielink" href=>'
                                 + item.Title + '</a></td></tr>';

                            })

                            $('#records_table').append(trHTML);

                        },



                    });
                  
					
					$('a.movielink').click(function () {
						event.preventDefault();						
						var movieid = $('.movielink').attr('id');					
						$.ajax({

							type: 'GET',

							url: 'http://webjetapitest.azurewebsites.net/api/cinemaworld/movie/'+movieid+'',

							beforeSend: function (xhr) { xhr.setRequestHeader('x-access-token', 'sjd1HfkjU83ksdsm3802k'); },

							dataType: 'json',

							async: false,

							success: function (response) {

								var output = '<table class="table">';									                           
									
									
									output += '<tr><th scope="col"><b>Actors</b></th>'+
											  '  <td>'+ response.Actors + ' </td></tr>'+
												'<tr><th scope="col">Awards</th><td>'+ response.Awards +'</td></tr>'+
												'<tr><th scope="col">Country</th><td>'+ response.Country + '</td></tr>'+
												'<tr><th scope="col">Director</th><td>'+ response.Director +'</td>'+
												'</tr></table>';
										
								$('#records_table').append(output);								
							},

						});
					});
				});
			});

           
           
		  
		   