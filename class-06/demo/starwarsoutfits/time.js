

var userTime = prompt('What hour is it in military time 0-24?');


if(userTime < 12){
    // alert('Good Morning');
    document.write('<h3>' + 'Good Morning' + '</h3>');
} else if (userTime >= 12 && userTime < 18){
    // alert('Good Afternoon');
    document.write('<h3>' + 'Good Afternoon' + '</h3>');
} else {
    // alert('Good Evening');
    document.write('<h3>' + 'Good Evening' + '</h3>');
}
