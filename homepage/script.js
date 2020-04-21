$('#itemModal').modal('show');
$('#cashModal').modal('show');
document.addEventListener('DOMContentLoaded', function() {
    var initialLocaleCode = 'th';
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid', 'timeGrid' ,'list'],
      defaultView: 'dayGridMonth',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listDay'
      },
      views: {
        listDay: { buttonText: 'list' }
      },
      contentHeight: 550,
      locale: initialLocaleCode,
      nnavLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectHelper: true,
      select: function(start, end) {
          // Display the modal.
          // You could fill in the start and end fields based on the parameters
          $('#myModal').modal('show');

      },
      eventClick: function(event, element) {
                // Display the modal and set the values to the event values.
                $('#myModal').modal('show');
                $('#myModal').find('#title').val(event.title);
                $('#myModal').find('#name').val(event.name);
                $('#myModal').find('#phone').val(event.phone);
                $('#myModal').find('#starts-at').val(event.start);
                $('#myModal').find('#amount').val(event.amount);
                $('#myModal').find('#table').val(event.table);

            },
            editable: true,
            eventLimit: true // allow "more" link when too many events

});

    $("#starts-at").datetimepicker({ 
        format: 'dd/mm/yyyy hh:mm tt',
        footer: true,
        modal: true 
    });
    $('#save-event').on('click', function() {
            var title = $('#title').val();
            if (title) {
                var eventData = {
                    title: title,
                    name: $('#name').val(),
                    phone: $('#phone').val(),
                    start: $('#starts-at').val(),
                    amount: $('#amount').val(),
                    table: $('#table').val()
                };
                $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
            }
            $('#calendar').fullCalendar('unselect');

            // Clear modal inputs
            $('#myModal').find('input').val('');

            // hide modal
            $('#myModal').modal('hide');
        });

    calendar.render();

  });
// input number
  $(document).ready(function() {
    $('.count2').prop('disabled', true);
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
        
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

$(function () {

  // INITIALIZE DATEPICKER PLUGIN
  $('.datepicker').datepicker({
      clearBtn: true,
      language:'th-th',
      format: " dd MM yyyy"
  });


  // FOR DEMO PURPOSE
  $('#reservationDate').on('change', function () {
      var pickedDate = $('input').val();
      $('#pickedDate').html(pickedDate);
  });
});
