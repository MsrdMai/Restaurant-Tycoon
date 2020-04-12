
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
      locale: initialLocaleCode,
      nnavLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectHelper: true,
      select: function(start, end) {
          // Display the modal.
          // You could fill in the start and end fields based on the parameters
          $('.modal').modal('show');

      },
      eventClick: function(event, element) {
                // Display the modal and set the values to the event values.
                $('.modal').modal('show');
                $('.modal').find('#title').val(event.title);
                $('.modal').find('#name').val(event.name);
                $('.modal').find('#phone').val(event.phone);
                $('.modal').find('#starts-at').val(event.start);
                $('.modal').find('#amount').val(event.amount);
                $('.modal').find('#table').val(event.table);

            },
            editable: true,
            eventLimit: true // allow "more" link when too many events

});
    $("#starts-at").datetimepicker({ footer: true, modal: true });
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
            $('.modal').find('input').val('');

            // hide modal
            $('.modal').modal('hide');
        });

    calendar.render();

  });
