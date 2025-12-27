const medicalHistory = require("../medical_history.json");
const userDatabase = require("../user-database.json");

function userLastAppointment(userIdOrName) {
  const query = userIdOrName.toLowerCase();

  
  const matchedUsers = [];
  for (const user of userDatabase) {
    const fullName = user.firstName + " " + user.lastName;
    if (user.userId.toLowerCase() === query || fullName.toLowerCase() === query) {
      matchedUsers.push(user);
    }
  }

  if (matchedUsers.length === 0) return null;

  const { userId, firstName, lastName } = matchedUsers[0];

  
  const userAppointments = [];
  for (const appointment of medicalHistory) {
    if (appointment.userId === userId && appointment.medicationsUsed.length > 0) {
      userAppointments.push(appointment);
    }
  }

  if (userAppointments.length === 0) return null; 


  let lastAppointment = userAppointments[0];
  for (const appointment of userAppointments) {
    if (new Date(appointment.date) > new Date(lastAppointment.date)) {
      lastAppointment = appointment
    }
  }

  return {
    userId: lastAppointment.userId,
    fullName: firstName + " " + lastName, 
    serviceId: lastAppointment.serviceId,
    speciality: lastAppointment.speciality,
    hospitalName: lastAppointment.hospitalName,
    medicalNotes: lastAppointment.medicalNotes,
    medicationsUsed: lastAppointment.medicationsUsed,
    date: lastAppointment.date
  };
}


console.log(userLastAppointment("usr_124"));



