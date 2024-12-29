export const getEventType = (date: string): 'happening' | 'completed' | 'upcoming' => {
  const eventDate = new Date(date);
  const today = new Date();
  
  // Reset time part for accurate date comparison
  today.setHours(0, 0, 0, 0);
  eventDate.setHours(0, 0, 0, 0);
  
  if (eventDate.getTime() === today.getTime()) {
    return 'happening';
  } else if (eventDate < today) {
    return 'completed';
  } else {
    return 'upcoming';
  }
};