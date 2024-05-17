// Funktion zum Anzeigen der Freundes-Buttons und Namen
function showButtons() {
    document.getElementById('mainButton').style.display = 'none'; // Hauptbutton ausblenden
    document.getElementById('friendsContainer').style.display = 'flex'; // Freundes-Container anzeigen
}

// Funktion zum Anzeigen des Profils eines Freundes
function showProfile(index) {
    const names = ['Ismail', 'Abdul', 'Kidus', 'Alemdar', 'Hassan'];
    const images = ['ismail.jpg', 'abdul.jpg', 'kidus.jpg', 'alemdar.jpg', 'hassan.jpg'];
    const ages = ['20', '20', '20', '18', '20'];
    const hobbies = ['brawl stars', 'fussball (kann keine 2 meter laufen)', 'autos bauen (mit lego)', 'essen', 'schach (ohne schummeln verliert er sogar gegen eininen blinden 5-jährigen'];
    const jobs = ['Stabiler Student von telekom darmstadt, nebenbei Mafia-Boss in der Eberstadt- und Kranichstein-Unterwelt', 'investment-berater (hat in 6 monaten, einen vertrag verkauft - an sich selber)', 'shell-tankstellenwächter und nebenbei millionär (geht in den teuersten restaurants in frankfurt essen) und autobauer', 'lagerhelfer weil man muss ihn mit gabelstapler bewegen', 'garnix, er tut nur so als würde er arbeiten manchmal'];

    document.getElementById('friendsContainer').style.display = 'none'; // Freundes-Container ausblenden
    document.getElementById('profileContainer').style.display = 'block'; // Profil-Container anzeigen
    
    document.getElementById('profileName').innerText = names[index]; // Name setzen
    document.getElementById('profileImage').src = images[index]; // Bild setzen
    document.getElementById('profileAge').innerText = ages[index]; // Alter setzen
    document.getElementById('profileHobby').innerText = hobbies[index]; // Hobby setzen
    document.getElementById('profileJob').innerText = jobs[index]; // Beruf setzen
}

// Funktion zum Anzeigen der gemeinsamen Aktionen
function showActions() {
    document.getElementById('friendsContainer').style.display = 'none'; // Freundes-Container ausblenden
    document.getElementById('actionsContainer').style.display = 'block'; // Video-Container anzeigen
}

// Funktion zum Zurückgehen zur Freundesliste
function goBack() {
    document.getElementById('profileContainer').style.display = 'none'; // Profil-Container ausblenden
    document.getElementById('actionsContainer').style.display = 'none'; // Video-Container ausblenden
    document.getElementById('friendsContainer').style.display = 'flex'; // Freundes-Container anzeigen
}
