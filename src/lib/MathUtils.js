export const thousandsToK = number => (number < 1000) ? number + '' : (Math.round(number / 100) / 10) + 'K';
