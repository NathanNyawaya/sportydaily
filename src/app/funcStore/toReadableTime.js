


export const formatDateTimeEAT = (isoString) => {
    // Check if the input is a valid ISO string
    if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(isoString)) {
        throw new Error('Invalid ISO 8601 string');
    }

    // Parse the date and time components
    const date = new Date(isoString);

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const hour = `0${date.getHours()}`.slice(-2);
    const minute = `0${date.getMinutes()}`.slice(-2);
    const seconds = date.getSeconds();


    const formattedDateTime = {
        date_: `${month} ${day}`,
        time_: `${hour}:${minute}`,
        timezone: "EAT"
    };
    return formattedDateTime
}

