// JavaScript source code
function searchForSubstring(stringToSearch, stringToFind) {

    if (stringToSearch === '' || stringToFind === '') {
        return (-1);
    }

    else if (stringToFind === null && stringToSearch === null) {
        return (-1);
    }

    else if (stringToFind.length > stringToSearch.length) {
        return (-1);
    }

    else if (stringToSearch.includes(stringToFind)) {
        return (stringToSearch.indexOf(stringToFind));
    }

    else {
        return (-1);
    }

}