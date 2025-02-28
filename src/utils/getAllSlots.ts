export const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 8; hour <= 23; hour++) {
    // Start from 8 AM, end at 11 PM
    for (let minute = 0; minute < 60; minute += 15) {
      // 15-minute intervals
      const time = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      slots.push(time);
    }
  }
  return slots;
};
