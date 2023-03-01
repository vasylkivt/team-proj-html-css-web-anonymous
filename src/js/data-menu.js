import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'

const dateInputs = document.querySelectorAll('.my-date-input');

dateInputs.forEach(input => {
    new AirDatepicker(input, {
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
});
