export const formatDateTimeEAT = (inputDateTime) => {
    const inputDate = new Date(inputDateTime);

    // Apply the UTC+3 offset for East Africa Time (EAT)
    const eastAfricaOffset = 3;
    const utcTime = inputDate.getTime();
    const eatTime = utcTime + (eastAfricaOffset * 60 * 60 * 1000);

    const eatDate = new Date(eatTime);

    // Get day and month
    const day = eatDate.getDate();
    const month = eatDate.getMonth() + 1; // Months are zero-indexed, so we add 1

    // Format the time (HH:mm)
    const hours = String(eatDate.getHours()).padStart(2, '0');
    const minutes = String(eatDate.getMinutes()).padStart(2, '0');

    // Construct the formatted string
    const formattedDateTime = {
        date_: `${day}/${month}`,
        time_: `${hours}:${minutes}`,
        timezone: 'EAT'
    };

    return formattedDateTime;
}
