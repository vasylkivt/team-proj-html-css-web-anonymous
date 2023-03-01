import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'

new AirDatepicker('.book-room-modal-date-input', {
    navTitles: {
        days(dp) {
            if (dp.selectedDates.length) {
                let date = dp.selectedDates[0];
                return `<small>
                   Ви вибрали  ${dp.formatDate(date, 'dd.MM.yyyy')}
                </small>`;
            }
            
            return 'Виберіть дату';
        }
    },
    position: 'top center',
    
});

new AirDatepicker('.book-room-modal-date-input2', {
    navTitles: {
        days(dp) {
            if (dp.selectedDates.length) {
                let date = dp.selectedDates[0];
                return `<small>
                   Ви вибрали  ${dp.formatDate(date, 'dd.MM.yyyy')}
                </small>`;
            }
            
            return 'Виберіть дату';
        }
    },
    position: 'top center',
});


new AirDatepicker('.book-table-modal-date-input', {
    navTitles: {
        days(dp) {
            if (dp.selectedDates.length) {
                let date = dp.selectedDates[0];
                return `<small>
                   Ви вибрали  ${dp.formatDate(date, 'dd.MM.yyyy')}
                </small>`;
            }
            
            return 'Виберіть дату';
        }
    },
    position: 'top center',
});