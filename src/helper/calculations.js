export const toDayMonthYear = (k) => {
    let date = k.split(" ")[0];
    let dd = date.split("-")[2];
    let mm = date.split("-")[1];
    let yyyy = date.split("-")[0];

    let returningArr = [dd, mm, yyyy];

    return returningArr;

}


export const monthNumToTxtSmall = (k) => {
    if(k==='01') { return 'Jan' }
    if(k==='02') { return 'Feb' }
    if(k==='03') { return 'Mar' }
    if(k==='04') { return 'Apr' }
    if(k==='05') { return 'May' }
    if(k==='06') { return 'Jun' }
    if(k==='07') { return 'Jul' }
    if(k==='08') { return 'Aug' }
    if(k==='09') { return 'Sep' }
    if(k==='10') { return 'Oct' }
    if(k==='11') { return 'Nov' }
    if(k==='12') { return 'Dec' }
}


export const sanitizeRoute = (e) => {
    let p = e.trim();
    p = p.replace(/\s/g, '');
    p = p.replace(/\//g, '');
    p = p.replace(/\$/g, '');
    p = p.replace(/\?/g, '');
    p = p.replace(/\!/g, '');
    // p = p.replace(/\@/g, '');
    p = p.replace(/\#/g, '');
    p = p.replace(/\%/g, '');
    p = p.replace(/\^/g, '');
    p = p.replace(/\&/g, '');
    p = p.replace(/\*/g, '');
    p = p.replace(/\(/g, '');
    p = p.replace(/\)/g, '');
    p = p.replace(/\=/g, '');
    p = p.replace(/\+/g, '');
    p = p.replace(/\`/g, '');
    p = p.replace(/\~/g, '');
    p = p.replace(/\|/g, '');
    p = p.replace(/\\/g, '');
    p = p.replace(/\[/g, '');
    p = p.replace(/\]/g, '');
    p = p.replace(/\{/g, '');
    p = p.replace(/\}/g, '');
    p = p.replace(/\:/g, '');
    p = p.replace(/\;/g, '');
    p = p.replace(/\'/g, '');
    p = p.replace(/\"/g, '');
    // p = p.replace(/\./g, '');
    p = p.replace(/\,/g, '');
    p = p.replace(/\>/g, '');
    p = p.replace(/\</g, '');
    p = p.toLowerCase();
    // p = getRidofDuplication(p);
    return p;
}


function getRidofDuplication(key) {
    if (key.length > 1) {
        let lKey = key.charAt(key.length - 1);
        let slKey = key.charAt(key.length - 2);
        if (lKey == "-" || lKey == "_" || lKey == "=" || lKey == "-_" || lKey == "_-" || lKey == "=_" || lKey == "_=" || lKey == "-=" || lKey == "=-" || lKey == "_-_") {
            if (lKey == slKey) {
                key = key.slice(0, -1);
            }
            return key;
        } else {
            return key;
        }
    } else {
        return key;
    }
}

export const timeLapsedClockFromRef = (k) => {
    const startingTime = new Date(k);

    setInterval(() => {
        const currentTime = new Date();
        const timeLapsed = currentTime - startingTime;

        const seconds = Math.floor((timeLapsed / 1000) % 60);
        const minutes = Math.floor((timeLapsed / (1000 * 60)) % 60);
        const hours = Math.floor((timeLapsed / (1000 * 60 * 60)) % 24);
        const days = Math.floor(timeLapsed / (1000 * 60 * 60 * 24));

        return "ok";
        //   console.log(`${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds have elapsed since ${startingTime}.`);
        // return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds have elapsed since ${startingTime}.`;
    }, 1000);
}


export const timeLeftInFuture = (k) => {
    let today = new Date();
    let targetDate = new Date(k);
    let timeDifference = targetDate.getTime() - today.getTime();
    let remainingDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return remainingDays;
}


export const dateDifference = (k) => {
    let date1 = new Date(k)
    const date2 = new Date();

    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays / 30.44);
    const diffYears = Math.floor(diffMonths / 12);

    return {
        years: diffYears,
        months: diffMonths % 12,
        days: parseInt(diffDays % 30.44)
    };
    // console.log(`${result.years} years, ${result.months} months, and ${result.days} days`);
}

export const humanReadableTimePassed = (k) => {
    let curTime = new Date();
    curTime = curTime.toISOString();
    let recTime = new Date(k).toISOString();
    let diff = new Date(curTime) - new Date(recTime);

    let days = Math.floor(diff / (24 * 60 * 60 * 1000));
    let hours = Math.floor((diff - days * (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));

    // let minutes = Math.floor(diff - ((diff - days * (24 * 60 * 60 * 1000)) / ( 60*1000)) );

    let minutes = Math.floor((diff / (1000 * 60)) % 60)


    // console.log("Minutes : ",minutes);

    let returningItem = '';
    if (days < 1) {
        if (hours < 1) {
            returningItem = minutes + " mins ago";
        } else if (hours < 5) {
            returningItem = hours + " hours " + minutes + " mins ago";
        } else if (hours < 12) {
            returningItem = hours + " hours ago";
        } else if (hours < 14) {
            returningItem = " today";
        } else {
            returningItem = " yesterday";
        }
    } else if (days < 30) {
        if (days < 7) {
            returningItem = days + " days ago";
        } else if (days > 6) {
            returningItem = " around a week ago";
        } else if (days < 13) {
            returningItem = days + " days ago";
        } else if (days < 15) {
            returningItem = " 2 weeks ago";
        } else if (days > 15) {
            returningItem = " 3 weeks ago";
        } else {
            returningItem = " around a month ago";
        }
    } else if (days > 29) {
        if (days < 45) {
            returningItem = " around a month ago";
        } else if (days < 60) {
            returningItem = " one & half month ago";
        } else if (days < 75) {
            returningItem = " 2 months ago";
        } else if (days < 90) {
            returningItem = " around 3 months ago";
        } else if (days < 115) {
            returningItem = " 3 months ago";
        } else if (days < 135) {
            returningItem = " 4 months ago";
        } else if (days < 165) {
            returningItem = " 5 months ago";
        } else if (days < 195) {
            returningItem = " 6 months ago";
        } else if (days < 225) {
            returningItem = " 7 months ago";
        } else if (days < 255) {
            returningItem = " 8 months ago";
        } else if (days < 285) {
            returningItem = " 9 months ago";
        } else if (days < 315) {
            returningItem = " 10 months ago";
        } else if (days < 345) {
            returningItem = " 11 months ago";
        } else if (days < 361) {
            returningItem = " last year";
        }
    } else if (days > 360) {
        returningItem = " last year";
    } else if (days > 720) {
        returningItem = " 1 and half year ago";
    } else {
        returningItem = " 2 years ago";
    }

    return returningItem;
}

export const getAge = (k) => {
    let curTime = new Date();
    curTime = curTime.toISOString();
    try {
        let recTime = new Date(k).toISOString();
        let diff = new Date(curTime) - new Date(recTime);

        let days = Math.floor(diff / (24 * 60 * 60 * 1000));
        let returningItem = '';
        returningItem = (parseInt(days / 365.4))
        return returningItem;
    } catch (error) {
        return "invalidTime"
    }
}


export const validateUsername = (username) => {
    // Check if username is empty or null
    if (!username) {
        return false;
    }

    // Check if username length is within a specific range (adjust as needed)
    const minLength = 6;
    const maxLength = 20;
    if (username.length < minLength || username.length > maxLength) {
        return false;
    }

    // Check if username contains only alphanumeric characters and underscores
    const validCharsRegex = /^[a-zA-Z0-9_]+$/;
    if (!validCharsRegex.test(username)) {
        return false;
    }

    // Check if username doesn't start or end with underscores
    if (username.startsWith('_') || username.endsWith('_')) {
        return false;
    }

    // If all checks pass, the username is valid
    return true;
}

export const sanitizeUsername = (username) => {
    // Sanitize the username by removing non-alphanumeric characters except underscores
    let sanitizedUsername = username.replace(/[^a-zA-Z0-9_]/g, '');

    // Ensure there's only one underscore, and it isn't at the beginning or end
    const underscoreCount = (sanitizedUsername.match(/_/g) || []).length;

    if (underscoreCount > 1 || sanitizedUsername.startsWith('_')) {
        // Remove all underscores if invalid (more than one or at the start/end)
        sanitizedUsername = sanitizedUsername.replace(/_/g, '');
    }

    // Return the sanitized username in lowercase
    return sanitizedUsername.toLowerCase();
};


export const sanitizeToDigits = (input) => {
    // Remove all non-digit characters
    const sanitized = input.replace(/\D/g, '');

    // Limit the length to 10 characters
    return sanitized.substring(0, 10);
}

export const sanitizeEmail = (input) => {
    // Remove invalid characters
    let sanitized = input.replace(/[^a-zA-Z0-9@._-]/g, '');

    // Ensure only one '@' is allowed
    const atIndex = sanitized.indexOf('@');
    if (atIndex !== -1) {
        // Split before and after '@'
        const beforeAt = sanitized.slice(0, atIndex);
        const afterAt = sanitized.slice(atIndex + 1).replace(/@/g, ''); // Remove extra '@' symbols from after the first one

        sanitized = beforeAt + '@' + afterAt;
    }

    // Prevent consecutive dots and a dot right after '@'
    sanitized = sanitized.replace(/\.{2,}/g, '.'); // Replace multiple dots with a single dot
    sanitized = sanitized.replace(/@\./g, '@'); // Prevent dot immediately after '@'

    return sanitized;
}




export const numberToWords = (inputNumber) => {
    let numberString = inputNumber.toString().replace(/[,.]/g, ''); // Remove commas and dots

    if (isNaN(numberString)) {
        return 'Invalid number';
    }

    let number = Number(numberString);

    if (number === 0) {
        return 'zero';
    }

    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function convertLessThanOneThousand(num) {
        let current = '';
        let hundreds = Math.floor(num / 100);
        let remainder = num % 100;

        if (hundreds > 0) {
            current += ones[hundreds] + ' hundred';
        }

        if (remainder > 0) {
            if (current) {
                current += ' ';
            }
            if (remainder < 10) {
                current += ones[remainder];
            } else if (remainder < 20) {
                current += teens[remainder - 10];
            } else {
                current += tens[Math.floor(remainder / 10)];
                if (remainder % 10 > 0) {
                    current += '-' + ones[remainder % 10]; // Hyphen for values like 21, 42
                }
            }
        }

        return current.trim();
    }

    let result = '';
    let chunk;
    let chunkIndex = 0;

    const units = ['', ' thousand', ' million', ' billion', ' trillion', ' quadrillion', ' quintillion', ' sextillion'];

    while (number > 0) {
        chunk = number % 1000;
        if (chunk !== 0) {
            const chunkStr = convertLessThanOneThousand(chunk);
            result = chunkStr + (units[chunkIndex] ? ' ' + units[chunkIndex] : '') + (result ? ' ' + result : '');
        }
        number = Math.floor(number / 1000);
        chunkIndex++;
    }

    return result.trim();
};



export const convertToAmPm = (time) => {
    // Check for null or undefined values
    if (time == null) {
        return "Invalid time. Time cannot be null or undefined.";
    }
    time = time?.trim()
    // Ensure the input matches the HH:MM:SS format
    if (!/^\d{1,2}:\d{1,2}:\d{1,2}$/.test(time)) {
        return "Invalid time format. Please use HH:MM:SS.";
    }

    // Split the time string into [hours, minutes, seconds]
    const [hourStr, minuteStr, secondStr] = time.split(':');

    const hour = Number(hourStr);
    const minute = Number(minuteStr);
    const second = Number(secondStr);

    // Validate the hour, minute, and second ranges
    if (hour < 0 || hour > 23 || minute < 0 || minute > 59 || second < 0 || second > 59) {
        return "Invalid time. Please check hour, minute, and second values.";
    }

    // Determine whether it's AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // Convert the hour to 12-hour format
    const hour12 = hour % 12 || 12;

    // Return the formatted time, ensuring minutes and seconds are padded with zeroes
    return `${hour12}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')} ${amPm}`;
}


export const convertDateToDdMmYyyy = (dateString) => {
    // Check for null, undefined, or empty values after trimming
    if (!dateString || typeof dateString !== 'string' || dateString.trim() === "") {
        return "Invalid date. Please provide a valid date string.";
    }

    // Trim white spaces from the input
    dateString = dateString.trim();

    // Ensure the input matches the YYYY-MM-DD format
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
        return "Invalid date format. Please use YYYY-MM-DD.";
    }

    // Split the date string into [year, month, day]
    const [year, month, day] = dateString.split('-');

    // Validate year, month, and day ranges
    if (Number(year) < 1000 || Number(year) > 9999 || Number(month) < 1 || Number(month) > 12 || Number(day) < 1 || Number(day) > 31) {
        return "Invalid date. Please check year, month, and day values.";
    }

    // Return the formatted date in DD-MM-YYYY
    return `${day}-${month}-${year}`;
}


export const roundOff = (value) => {
    // Check if the input is a number
    if (typeof value !== 'number' || isNaN(value)) {
        return "Invalid input. Please provide a valid number.";
    }

    // Get the rounded value
    const roundedValue = Math.round(value);

    // Calculate the difference between the original value and the rounded value
    const difference = roundedValue - value;

    // Return the rounded value and how much it was rounded by
    return {
        roundedValue: roundedValue,
        difference: difference
    };
}


export const capitalizeFirstLetter = (str) => {
    // Check if the input is a valid string
    if (typeof str !== 'string' || str.trim() === '') {
        return "Invalid input. Please provide a valid string.";
    }

    // Convert the first letter to uppercase and the rest to lowercase
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export const sanitizeToPositiveNumber = (input) => {
    // Convert input to a string
    const inputStr = input.toString();
    let sanitizedValue = '';
    let decimalFound = false;

    for (let i = 0; i < inputStr.length; i++) {
        const char = inputStr[i];

        // Check if the character is a digit
        if (char >= '0' && char <= '9') {
            sanitizedValue += char; // Add digits to sanitized value
        }
        // Allow a single decimal point
        else if (char === '.' && !decimalFound) {
            sanitizedValue += char; // Add decimal point
            decimalFound = true; // Mark that decimal has been added
        }
        // Allow a single dash at the beginning
        else if (char === '-' && i === 0 && sanitizedValue === '') {
            sanitizedValue += char; // Add dash if it's the first character
        }
    }

    // Handle leading zeros
    if (sanitizedValue.includes('.')) {
        // If there's a decimal point, remove leading zeros before the decimal
        sanitizedValue = sanitizedValue.replace(/^0+(?=\d)/, ''); // Remove leading zeros before the first digit
        // If the whole number is just zeros, we need to ensure at least '0.' remains
        sanitizedValue = sanitizedValue.replace(/^0+$/, '0'); // If it's only zeros, convert to '0'
    } else {
        // If no decimal point, remove leading zeros entirely
        sanitizedValue = sanitizedValue.replace(/^0+/, '');
        // If all zeros, return '0'
        sanitizedValue = sanitizedValue === '' ? '0' : sanitizedValue;
    }

    // Convert to a number, ensuring it's a positive float
    const numberValue = Number(sanitizedValue)*1;
    return numberValue >= 0 ? numberValue : ''; // Return the sanitized number or empty if negative
}

