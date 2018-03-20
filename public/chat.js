// Make connection
var socket = io.connect('http://localhost:4000');
    $(document).ready(function () {
        $(".btn").click(function (e) { 
            e.preventDefault();
            var roll_count =$(this).attr('id').substring(1);
           
            socket.emit('roll', {
                dice: roll_count, 
                roll: Math.floor((Math.random() * parseInt(roll_count)) + 1),
                handle: $("#handle").val()
            });


        });

            socket.on('roll', function(data){
                var str= '<p><strong>' + data.handle + ' has just rolled a D'+roll_count+'</strong>' + data.roll + '</p>';
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

