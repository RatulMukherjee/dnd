// Make connection
var socket = io.connect('http://localhost:4000');
    $(document).ready(function () {
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
                var str= '<p><strong>' + data.handle + ' has just rolled a D'+data.dice +'</strong> ' + data.roll + '</p>';
                $("#output").append(str);
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

