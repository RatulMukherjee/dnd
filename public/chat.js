// Make connection

var url = "http://localhost:4000";

 var socket = io.connect('http://18.219.189.12:4000');
 //var socket = io.connect(url);
    $(document).ready(function () {
        var d0 = $('#d0')[0];  
        var d20 = $('#d20')[0];  
        if(localStorage.getItem('Handle')==undefined){
            $("#signup").modal('show');
        }
       
        //var roll_count=""
       $("#savedetails").click(function (e) { 
           e.preventDefault();
           localStorage.setItem('token',$('input[name=Radio]:checked').val());
           localStorage.setItem('Handle',$("#user").val())

           $("#signup").modal('hide');
       
           
       });

        $(".btn-sm").click(function (e) { 
            e.preventDefault();
              var roll_count =$(this).attr('id').substring(1);
           
            socket.emit('roll', {
                dice: roll_count,
                roll: Math.floor((Math.random() * parseInt(roll_count)) + 1),
                handle: localStorage.getItem('Handle')
            });


        });

            socket.on('roll', function(data){
                if (data.roll == 1 )
                    d0.play(); 
                else if(data.roll == 20)
                    d20.play();   
                    var time = new Date();
                            
                var str= '<p><i>'+time.getHours()+':'+time.getMinutes()+':'+time.getSeconds()+' - </i> <strong> ' + data.handle + ' has just rolled a D'+data.dice +'</strong> ' + data.roll + '</p>';
                $("#output").append(str);
                $('#chat-window').animate({scrollTop: $('#chat-window').prop("scrollHeight")}, 500);
                //console.log("here");
            });




    });






// // Emit events
// btn.addEventListener('click', function(){
//   socket.emit('chat', {
//       message: message.value,
//       handle: handle.value
//   });
//   message.value = "";
// });

// // Listen for events

